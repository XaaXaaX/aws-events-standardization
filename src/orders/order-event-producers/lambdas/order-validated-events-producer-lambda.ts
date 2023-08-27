import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { PublishEvent } from "@shared/repository/sns-repository";
import { BaseHandler } from "@shared/handlers/base-handler";
import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { generateSucessResponse } from "@shared/cross-cutting/http-respose-helper";
import { EventType as OrderEventType } from "@shared/specs/order/order-v1-models";
import { OrderSource } from "@shared/models/constants/event-sources";

export class OrderValidatedEventHandler extends BaseHandler {
	Handler: Handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
		const orderId = JSON.parse(event.body).id
		const orderDeleteEvent = super.GenerateNotificationEvent(OrderSource, "order.validated.v1" satisfies OrderEventType, { orderId }, `order/${orderId}` )
		await PublishEvent(orderDeleteEvent);
		return generateSucessResponse({message: "delete order published"});
	};
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderValidatedEventHandler().Handler);
