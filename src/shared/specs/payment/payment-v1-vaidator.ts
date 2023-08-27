import { SchemaValidator } from "../../asyncapi-schema-validator";
import { schema } from "./payment-v1-schema";
import { EventType } from "./payment-v1-models";
export class PaymentEventValidator {
    private readonly validator: SchemaValidator;
    constructor() {
        this.validator = new SchemaValidator({
            ["payment.Confirmed.v1" satisfies EventType]: 'PaymentConfirmedEvent#/components/schemas/PaymentConfirmedEvent',
        })
    }

    Validate(event: any) {
        return this.validator.validate(event, schema);
    }
}