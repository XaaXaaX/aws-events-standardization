export interface OrderConfirmedEvent {
  data: AnonymousSchema_1Object | (any)[] | string | number | boolean;
  type: EventType;
  id: string;
  eventcategory?: EventCategory;
  idempotencykey?: string;
  correlationid?: string;
  source: string;
  specversion: string;
  datacontenttype?: string;
  dataschema?: string;
  subject?: string;
  time?: string;
  dataBase64?: string;
}
 
export interface AnonymousSchema_1Object {
  orderId?: string;
}
 
export type EventType = "order.received.v1" | "order.confirmed.v1" | "order.validated.v1";
 
export type EventCategory = "IntegrationEvent" | "DeltaEvent" | "NotificationEvent" | "CarriedStateEvent";
 
export interface OrderReceivedEvent {
  data: OrderObject | (any)[] | string | number | boolean;
  eventcategory?: EventCategory;
  type: EventType;
  id: string;
  idempotencykey?: string;
  correlationid?: string;
  source: string;
  specversion: string;
  datacontenttype?: string;
  dataschema?: string;
  subject?: string;
  time?: string;
  dataBase64?: string;
}
 
export interface OrderObject {
  orderId: string;
  date: string;
  userId: string;
  productId: string;
  price: number;
  quantity: number;
}
 
