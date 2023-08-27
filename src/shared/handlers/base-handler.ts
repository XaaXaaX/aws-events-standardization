import { EventEnvelope } from "@shared/models/event-model";
import { v4 as uuidv4 } from 'uuid';
import { logger } from "@shared/cross-cutting/logger";
import { OrderEventValidator } from "@shared/specs/order/order-v1-vaidator";

export class BaseHandler {
	protected readonly validator = new OrderEventValidator(); 
    GenerateIntegrationEvent = async <EventType extends string, TData> (source: string, eventType: EventType, eventData: TData): Promise<EventEnvelope<EventType, TData>> => {
        const integration = EventEnvelope.createIntegrationEventEnvelope({
			id: uuidv4(),
			source: source,
			type: eventType,
			data: eventData
		});
	
		logger.logEventMetaData(integration)
		
		if (this.validator.Validate( integration )) 
			return integration;

		throw new Error("Order Integration Event is not valid");
    }

	GenerateNotificationEvent = async <EventType extends string, TData> (source: string, eventType: EventType, eventData: TData, subject: string): Promise<EventEnvelope<EventType, TData>> => {
        const nontification = EventEnvelope.createEventNotificationEnvelope({
			id: uuidv4(),
			source: source,
			type: eventType,
			subject,
			data: eventData
		});
	
		logger.logEventMetaData(nontification)
		
		if (this.validator.Validate( nontification )) 
			return nontification;

		throw new Error("Order Nontification Event is not valid");
    }

	ReceivedEvent = <EventType extends string, TData> (event: string): EventEnvelope<EventType, TData> => {
		const eventPayload = EventEnvelope.deserialize<EventType, TData>(event);

		if (this.validator.Validate( eventPayload )) 
			return eventPayload;

		throw new Error("Order Notification Event is not valid");

	}
}