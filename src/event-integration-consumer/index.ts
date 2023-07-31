import { Handler, SQSEvent } from "aws-lambda";

const lambdaHandler: Handler = async (event: SQSEvent) : Promise<void> => {
	const recordBody = JSON.parse(event.Records[0].body);
	console.log(`happy to receive th integration event ${recordBody.type} for Id: ${recordBody.id} from ${recordBody.source}`);
	console.log(`Here the event data received for version ${recordBody.dataVersion} as:  \n ${JSON.stringify(recordBody.data, null, 4)} `);
};

export const handler = lambdaHandler;

