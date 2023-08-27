import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { PublishEvent } from "@shared/repository/sns-repository";
import { nanoid } from "nanoid";
import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { BaseHandler } from "@shared/handlers/base-handler";
import { generateSucessResponse } from "@shared/cross-cutting/http-respose-helper";
import { EventType as OrderEventType, OrderObject } from "@shared/specs/order/order-v1-models";
import { OrderSource } from "@shared/models/constants/event-sources";

export class OrderReceivedEventHandler extends BaseHandler {
	Handler: Handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
		const orderReceivedEvent = super.GenerateIntegrationEvent(OrderSource, "order.received.v1" satisfies OrderEventType, this.generateEventData(JSON.parse(event.body)))
		await PublishEvent(orderReceivedEvent);
		return generateSucessResponse({message: "received order published"});
	};

	private generateEventData(receivedCommandBody: any): OrderObject {
		return {
			orderId: nanoid(),
			price: receivedCommandBody.price,
			quantity: receivedCommandBody.quantity,
			productId: receivedCommandBody.productId,
			userId: receivedCommandBody.userId,
			date: receivedCommandBody.date
		} satisfies OrderObject;
	}
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderReceivedEventHandler().Handler);
