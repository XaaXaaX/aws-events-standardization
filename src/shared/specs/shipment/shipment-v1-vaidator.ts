import { SchemaValidator } from "../../asyncapi-schema-validator";
import { schema } from "./shipment-v1-schema";
import { EventType } from "./shipment-v1-models";

export class ShipmentEventValidator {
    private readonly validator: SchemaValidator;
    constructor() {
        this.validator = new SchemaValidator({
            ["shipment.delivered.v1" satisfies EventType]: 'ShipmentDeliveredEvent#/components/schemas/ShipmentDeliveredEvent',
        })
    }

    Validate(event: any) {
        return this.validator.validate(event, schema);
    }
}