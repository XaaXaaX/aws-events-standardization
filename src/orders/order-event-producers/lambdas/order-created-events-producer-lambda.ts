import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { OrderEventEntity, OrderEventType } from "@shared/models/orders/models";
import { PublishEvent } from "@shared/adapters/events-publisher";
import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { BaseHandler } from "@shared/handlers/base-handler";
import { generateSucessResponse } from "@shared/cross-cutting/http-respose-helper";

export class OrderCreationEventHandler extends BaseHandler {
	Handler: Handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
		const orderCreatedEvent = super.GenerateIntegrationEvent(OrderEventType.Created, this.generateEventData(JSON.parse(event.body)))
		await PublishEvent(orderCreatedEvent);
		return generateSucessResponse({message: "received order published"});
	};

	private generateEventData(model: Record<string, any>): { orderId: string; price: any; quantity: any; } {
		return {
			orderId: model.id,
			price: model.price,
			quantity: model.quantity
		} satisfies OrderEventEntity;
	}
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderCreationEventHandler().Handler);
