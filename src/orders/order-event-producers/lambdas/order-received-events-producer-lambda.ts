import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { OrderEventEntity, OrderEventType } from "@shared/models/orders/models";
import { PublishEvent } from "@shared/adapters/events-publisher";
import { nanoid } from "nanoid";
import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { BaseHandler } from "@shared/handlers/base-handler";
import { generateSucessResponse } from "@shared/cross-cutting/http-respose-helper";

export class OrderReceptionEventHandler extends BaseHandler {
	Handler: Handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
		const orderReceivedEvent = super.GenerateIntegrationEvent(OrderEventType.Received, this.generateEventData(JSON.parse(event.body)))
		await PublishEvent(orderReceivedEvent);
		return generateSucessResponse({message: "received order published"});
	};

	private generateEventData(receivedCommandBody: any): { orderId: string; price: any; quantity: any; } {
		return {
			orderId: nanoid(),
			price: receivedCommandBody.price,
			quantity: receivedCommandBody.quantity
		} satisfies OrderEventEntity;
	}
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderReceptionEventHandler().Handler);
