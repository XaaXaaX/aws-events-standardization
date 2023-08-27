import { Handler, SQSEvent } from "aws-lambda";
import { PutItem } from "@shared/repository/dynamodb-repository";
import { EventType as OrderEventType } from "@shared/specs/order/order-v1-models";
import { BaseHandler } from "@shared/handlers/base-handler";
import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";

export class OrderValidatedEventConsumerEventHandler extends BaseHandler {
	Handler: Handler = async (event: SQSEvent) : Promise<void> => {
		const eventPayload = this.ReceivedEvent<OrderEventType, { orderId: string }>(event.Records[0].body);
		console.log(`happy to be notified by ${eventPayload.type} for Id: ${eventPayload.id} from ${eventPayload.source}`);
		await PutItem({ orderId: eventPayload.data.orderId, type: eventPayload.type});
	};
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderValidatedEventConsumerEventHandler().Handler);

