import { Handler, SQSEvent } from "aws-lambda";
import { nanoid } from "nanoid";
import { validate } from "../../docs/streams/Order/validator";
import { CreateIntegrationEvent, CreateNotificationEvent, EventType } from "@shared/models/models";
import { PublishEvent } from "@shared/adapters/events-publisher";

const lambdaHandler: Handler = async (event: SQSEvent) : Promise<void> => {

	console.log(event);
	const record = event.Records[0];

	const id = nanoid();

	const notification = CreateNotificationEvent({ orderId: id}, EventType.Created );

	Promise.resolve(
		validate( notification ))
		.then(() => console.log("Event respects the Order Notification Specifications"))
		.catch( (error) => logErrors(error));

	await PublishEvent(notification)

	const bodyJson = JSON.parse(record.body);
	const data = { orderId: id, price: bodyJson.price, quantity: bodyJson.quantity };
	const integration = CreateIntegrationEvent(
		data,
		EventType.Created,
		"1.0.0"
	);
	
	Promise.resolve(
		validate( integration ))
		.then(() => console.log("Event respects the Order Notification Specifications"))
		.catch( (error) => logErrors(error));

	await PublishEvent(integration)
};

function logErrors(error: any) {
	console.log(error);
    const msg = { Errors: JSON.parse(error.message) };
    console.log(msg);
}


export const handler = lambdaHandler;

