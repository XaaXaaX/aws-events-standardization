import { Handler, SQSEvent } from "aws-lambda";
import { PutItem } from "@shared/adapters/dynamodb-adapetre";

const lambdaHandler: Handler = async (event: SQSEvent) : Promise<void> => {
	const recordBody = JSON.parse(event.Records[0].body);
	console.log(`happy to be notified by ${recordBody.type} for Id: ${recordBody.id} from ${recordBody.source}`);

	await PutItem({ orderId: recordBody.id, type: recordBody.type});
};


export const handler = lambdaHandler;

