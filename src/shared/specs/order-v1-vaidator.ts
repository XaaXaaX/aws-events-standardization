import { OrderEventType } from "@shared/models/orders/models";
import { SchemaValidator } from "../asyncapi-schema-validator";
import { schema } from "./order-v1-schema";

export class OrderEventValidator {
    private readonly validator: SchemaValidator;
    constructor() {
        this.validator = new SchemaValidator({
            [OrderEventType.Received]: 'OrderReceivedEvent#/components/schemas/OrderReceivedEvent',
            [OrderEventType.Confirmed]: 'OrderConfirmedEvent#/components/schemas/OrderConfirmedEvent',
        })
    }

    Validate(event: any) {
        return this.validator.validate(event, schema);
    }
}