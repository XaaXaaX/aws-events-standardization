import { SchemaValidator } from "../../asyncapi-schema-validator";
import { schema } from "./product-v1-schema";
import { EventType } from "./product-v1-models";

export class ProductEventValidator {
    private readonly validator: SchemaValidator;
    constructor() {
        this.validator = new SchemaValidator({
            ["product.availability-confirmed.v1" satisfies EventType]: 'ProductAvailabilityConfirmedEvent#/components/schemas/ProductAvailabilityConfirmedEvent',
        })
    }

    Validate(event: any) {
        return this.validator.validate(event, schema);
    }
}