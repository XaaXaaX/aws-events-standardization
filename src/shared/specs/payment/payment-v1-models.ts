export interface PaymentConfirmedEvent {
  data: PaymentObject | (any)[] | string | number | boolean;
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
 
export interface PaymentObject {
  paymentId: string;
  date: string;
  orderId: string;
  amount: number;
}
 
export type EventCategory = "IntegrationEvent" | "DeltaEvent" | "NotificationEvent" | "CarriedStateEvent";
 
export type EventType = "payment.received.v1" | "payment.Confirmed.v1";
 
