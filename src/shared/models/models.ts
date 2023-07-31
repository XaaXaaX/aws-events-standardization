import { EventModel, InitEvent } from "./event-model";

export enum EventType {
    Created = 'myentity.created',
    Deleted = 'myentity.deleted',
    Updated = 'myentity.updated',
    Suspended = 'myentity.suspended',
    // Theses are examples and you need provide meaningful domain base event type
    // This relates to the Capability and its domain context

} 
export const source = 'platform:domain:exampleproducer';

export type EventMetaInfo = { orderId: string };
export type EventData = { price: number, quantity: number }

export type EventEntity = EventMetaInfo & EventData;

export type DataUpdated<T> = EventModel<T, EventType.Updated>;
export type DataDeleted<T> = EventModel<T, EventType.Deleted>;
export type DataCreated<T> = EventModel<T, EventType.Created>;

export type NotificationUpdated = DataUpdated<EventMetaInfo>
export type NotificationDeleted = DataUpdated<EventMetaInfo>;
export type NotificationCreated = DataUpdated<EventMetaInfo>;

type NotificationEvent = NotificationCreated | NotificationDeleted | NotificationUpdated

export type IntegrationUpdated = DataUpdated<EventEntity>
export type IntegrationDeleted = DataDeleted<EventEntity>;
export type IntegrationCreated = DataCreated<EventEntity>;

export const CreateNotificationEvent = (event: EventMetaInfo, type: EventType): EventModel<NotificationEvent, EventType> => {
    return InitEvent(
        event.orderId,
        source,
        type,
        "NOTIFICATION");
}

export const CreateIntegrationEvent = (event: EventEntity, type: EventType, version: string): EventModel<EventEntity, EventType> => {
    return InitEvent(
        event.orderId,
        source,
        type,
        "INTEGRATION",
        "OrderIntegrationEvent#/components/schemas/OrderIntegrationEvent",
        event,
        version);
}
