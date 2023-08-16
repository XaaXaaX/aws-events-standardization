export enum OrderEventType {
    Received = 'order.received.v1',
    Confirmed = 'order.confirmed.v1',
    Created = 'order.created.v1',
    Deleted = 'order.deleted.v1',
    Updated = 'myentity.updated.v1',
    Rejected = 'order.rejected.v1',
} 
export const OrderSource = 'ecommerce:order:ingestion';

export type OrderEventEntity = { orderId: string, price: number, quantity: number }
export type OrderEventMetaInfo = Pick<OrderEventEntity, 'orderId'>;
