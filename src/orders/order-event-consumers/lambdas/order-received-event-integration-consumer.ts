import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { BaseHandler } from "@shared/handlers/base-handler";
import { OrderEventType } from "@shared/models/orders/models";
import { Handler, SQSEvent } from "aws-lambda";

export class OrderReceivedEventConsumerEventHandler extends BaseHandler {

	Handler: Handler = async (event: SQSEvent) : Promise<void> => {
		const eventPayload = super.ReceivedEvent<OrderEventType.Received, any>(JSON.parse(event.Records[0].body));
		console.log(`happy to receive th integration event ${eventPayload.type} for Id: ${eventPayload.id} from ${eventPayload.source}`);
	}
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new OrderReceivedEventConsumerEventHandler().Handler);

