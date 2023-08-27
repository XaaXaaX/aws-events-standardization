import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { BaseHandler } from "@shared/handlers/base-handler";
import { Handler, SQSEvent } from "aws-lambda";
import { EventType as PaymentEventType } from "@shared/specs/payment/payment-v1-models";

export class OrderConfirmedEventConsumerEventHandler extends BaseHandler {

	Handler: Handler = async (event: SQSEvent) : Promise<void> => {
		const eventPayload = super.ReceivedEvent<PaymentEventType, any>(JSON.parse(event.Records[0].body));
		console.log(`happy to receive th integration event ${eventPayload.type} for Id: ${eventPayload.id} from ${eventPayload.source}`);
	}
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderConfirmedEventConsumerEventHandler().Handler);

