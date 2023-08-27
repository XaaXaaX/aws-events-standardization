import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { BaseHandler } from "@shared/handlers/base-handler";
import { Handler, SQSEvent } from "aws-lambda";
import { EventType as OrderEventType } from "@shared/specs/order/order-v1-models";

export class OrderConfirmedEventConsumerEventHandler extends BaseHandler {

	Handler: Handler = async (event: SQSEvent) : Promise<void> => {
		const eventPayload = super.ReceivedEvent<OrderEventType, any>(JSON.parse(event.Records[0].body));
		console.log(`happy to receive th integration event ${eventPayload.type} for Id: ${eventPayload.id} from ${eventPayload.source}`);
	}
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderConfirmedEventConsumerEventHandler().Handler);

