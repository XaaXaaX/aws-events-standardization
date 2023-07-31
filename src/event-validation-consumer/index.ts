import { Handler, SQSEvent } from "aws-lambda";
import { validate } from "../../docs/streams/CAPABILITY/validator";

const lambdaHandler: Handler = async (event: SQSEvent) : Promise<void> => {
	const recordBody = JSON.parse(event.Records[0].body);

	console.log(`happy to receive th integration event ${recordBody.type} for Id: ${recordBody.id} from ${recordBody.source}`);
	console.log(`validating version ${recordBody.dataVersion} as:  \n ${JSON.stringify(recordBody.data, null, 4)} `);

	Promise.resolve(
		validate( recordBody ))
		.then(() => console.log("Event respects the enterrise specification"))
		.catch(() => console.log("an error while validation event"));
};

export const handler = lambdaHandler;

