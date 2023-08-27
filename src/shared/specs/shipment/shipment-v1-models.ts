export interface ShipmentDeliveredEvent {
  data: ShipmentObject | (any)[] | string | number | boolean;
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
 
export interface ShipmentObject {
  shipmentId: string;
  date: string;
  userId?: string;
}
 
export type EventCategory = "IntegrationEvent" | "DeltaEvent" | "NotificationEvent" | "CarriedStateEvent";
 
export type EventType = "shipment.delivered.v1";
 
