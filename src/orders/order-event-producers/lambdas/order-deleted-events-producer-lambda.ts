import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { PublishEvent } from "@shared/adapters/events-publisher";
import { BaseHandler } from "@shared/handlers/base-handler";
import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { generateSucessResponse } from "@shared/cross-cutting/http-respose-helper";
import { OrderEventType } from "@shared/models/orders/models";


export class OrderDeleteEventHandler extends BaseHandler {
	Handler: Handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
		const orderId = JSON.parse(event.body).id
		const orderDeleteEvent = super.GenerateNotificationEvent(OrderEventType.Deleted, { orderId }, `order/${orderId}` )
		await PublishEvent(orderDeleteEvent);
		return generateSucessResponse({message: "delete order published"});
	};
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderDeleteEventHandler().Handler);
