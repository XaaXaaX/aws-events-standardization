export interface ProductAvailabilityConfirmedEvent {
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
  productId?: string;
}
 
export type EventType = "product.availability-confirmed.v1";
 
export type EventCategory = "IntegrationEvent" | "DeltaEvent" | "NotificationEvent" | "CarriedStateEvent";
 
