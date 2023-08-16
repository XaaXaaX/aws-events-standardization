import { Handler, SQSEvent } from "aws-lambda";
import { PutItem } from "@shared/adapters/dynamodb-adapetre";
import { OrderEventType } from "@shared/models/orders/models";
import { BaseHandler } from "@shared/handlers/base-handler";
import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";

export class OrderDeletedEventConsumerEventHandler extends BaseHandler {
	Handler: Handler = async (event: SQSEvent) : Promise<void> => {
		const eventPayload = this.ReceivedEvent<OrderEventType.Deleted, { orderId: string }>(event.Records[0].body);
		console.log(`happy to be notified by ${eventPayload.type} for Id: ${eventPayload.id} from ${eventPayload.source}`);
		await PutItem({ orderId: eventPayload.data.orderId, type: eventPayload.type});
	};
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderDeletedEventConsumerEventHandler().Handler);

