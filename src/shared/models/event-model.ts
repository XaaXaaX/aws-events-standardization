import { CloudEvent } from "cloudevents";
export type SpecVersion = "1.0";
export type DataContentType = "application/json";
export type EventCategory = 'IntegrationEvent' | 'NotificationEvent' | 'CarriedStateEvent' | 'DeltaEvent';

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

type EventEnvelopeProperties<EventType extends string, TData> = Partial<EventEnvelope<EventType, TData>> & Pick<EventEnvelope<EventType, TData>, 'id' | 'type' | 'source'>;

type EventNotificationEnvelopeProperties<EventType extends string, TData> = WithRequired<EventEnvelopeProperties<EventType, TData>, 'subject'>;

type IntegrationEventEnvelopeProperties<EventType extends string, TData> = EventEnvelopeProperties<EventType, TData>;

export class EventEnvelope<EventType extends string, TData> extends  CloudEvent<TData> {
    
    correlationid?: string;
    idempotencykey?: string;
    eventcategory?: EventCategory;
    type: EventType;

    constructor(event: EventEnvelopeProperties<EventType, TData>){
        super(event);
    }

    static createEventNotificationEnvelope<EventType extends string, TData>(event: EventNotificationEnvelopeProperties<EventType, TData>): EventEnvelope<EventType, TData> {
        delete event.data
        event.eventcategory = 'NotificationEvent';
        return new EventEnvelope(event);
    }

    static createIntegrationEventEnvelope<EventType extends string, TData>(event: IntegrationEventEnvelopeProperties<EventType, TData>): EventEnvelope<EventType, TData> {
        event.eventcategory = 'IntegrationEvent';
        return new EventEnvelope(event);
    }

    static createEventEnvelope<EventType extends string, TData>(event: EventEnvelopeProperties<EventType, TData>) {
        return new EventEnvelope(event);
    }

    static deserialize<EventType extends string, TData>(json: string) : EventEnvelope<EventType, TData> {

        if(!json) {
            throw new Error("argument was null of undefined");
        }

        const props = JSON.parse(json) as EventEnvelopeProperties<EventType, TData>;

        const envelope = new EventEnvelope(props);

        if(!envelope.validate()) {
            throw new Error("Not a valid cloud event schema");
        }

        return envelope;
    }
 }



