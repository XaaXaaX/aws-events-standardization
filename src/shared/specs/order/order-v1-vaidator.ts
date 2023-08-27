import { SchemaValidator } from "../../asyncapi-schema-validator";
import { schema } from "./order-v1-schema";
import { EventType } from "./order-v1-models";

export class OrderEventValidator {
    private readonly validator: SchemaValidator;
    constructor() {
        this.validator = new SchemaValidator({
            ["order.received.v1" satisfies EventType]: 'OrderReceivedEvent#/components/schemas/OrderReceivedEvent',
            ["order.confirmed.v1" satisfies EventType]: 'OrderConfirmedEvent#/components/schemas/OrderConfirmedEvent'
        })
    }

    Validate(event: any) {
        return this.validator.validate(event, schema);
    }
}