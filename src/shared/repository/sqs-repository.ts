import { SQSClient, SendMessageCommand, SendMessageCommandInput } from '@aws-sdk/client-sqs';

const sqsClient = new SQSClient({});

const SendMessageEvent = async (event: any): Promise<void> => {
    const input: SendMessageCommandInput = {
        MessageBody: JSON.stringify(event),
        QueueUrl: process.env.EVENTS_QUEUE
    };
    
    await sqsClient.send(new SendMessageCommand(input));
}

export {
    SendMessageEvent
}


