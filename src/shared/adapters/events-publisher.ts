import { PublishCommand, PublishCommandInput, SNSClient } from '@aws-sdk/client-sns';

const snsClient = new SNSClient({});

const PublishEvent = async (event: any): Promise<void> => {
    const input: PublishCommandInput = {
        Message: JSON.stringify(event),
        TopicArn: process.env.TOPIC_ARN
    };
    
    await snsClient.send(new PublishCommand(input));
}


export {
    PublishEvent
}


