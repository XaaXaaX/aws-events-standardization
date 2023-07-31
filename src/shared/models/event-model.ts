import { v4 as uuid, v5 as uuidV5 } from 'uuid';

export type SpecVesrion = "1.0.2";
export type DataContentType = "JSON";
export type EventCategory = 'NOTIFICATION' | 'INTEGRATION' | 'VIEW' | 'DELTA';

export type EventModel<TPayload, EventType = string> = {
    specVersion?: SpecVesrion; // The cloudEvents Spec Version the latest is 1.0.2
    time: string;
    id: string; // an identifier that keeps unique in the context of the source
    type: EventType;
    category: EventCategory; 
    source: string; // Identifies the context of event producer
    subject?: string; // to simplify consumers filtering process the source add some meaningful info side of source / type and id
    idempotencyKey: string;
    correlationId: string;
    dataSchema?: string; // the path to the schema definition for event
    dataVersion?: string; // the version of data model represented in data object
    dataContentType?: DataContentType; // the data item contenttype 
    data?: TPayload
}

export function InitEvent<TData, TEventType>(
    id: string,
    source: string,
    eventType: TEventType,
    eventCategory: EventCategory,
    dataSchema?: string,
    eventData?: TData,
    dataVersion?: string
     ): EventModel<TData, TEventType> {
        
    return {
        correlationId: uuid(),
        idempotencyKey: uuidV5(JSON.stringify(eventData ?? id), "40781d63-9741-40a6-aa25-c5a35d47abd6"),
        id,
        time: new Date().toISOString(),
        data: eventData,
        type: eventType,
        source,
        category: eventCategory,
        dataSchema,
        specVersion: "1.0.2",
        dataVersion,
        dataContentType: 'JSON'
    }
}