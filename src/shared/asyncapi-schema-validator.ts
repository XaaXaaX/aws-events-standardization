import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajvOptions = {
    allErrors: true,
    allowUnionTypes: true,
    // following this sample, ajv consider some of cloudevent properties as additional eventhough they are part of the event envelop (due to the use of allOf on the asyncapi schema)
    // ajv mutates objects that are provided into the validator and removes the additional properties (if this property is set to true in its .ctor)
    // when validating an envelop we will need to clone it, we ensure that ajv do not mutate the original object that is provided as argument of the validation
    // SEE: https://github.com/ajv-validator/ajv/issues/1231   
    removeAdditional: true,
};
    
class SchemaValidator {

    constructor(private readonly schemaRefs: Record<string, any>) {}
    validate = (event: any, schema: any) => {
        const schemaRef = this.schemaRefs[event.type];
        return this.AjvValidate(event, schema, schemaRef.split('#')[0] , schemaRef);
    }
    
    private AjvValidate(
        obj: any,
        schema: any,
        key: any,
        ref: any
    ) {
        const ajv = new Ajv(ajvOptions);
        addFormats(ajv);
    
        ajv.addVocabulary([
            'asyncapi',
            'info',
            'servers',
            'channels',
            'components',
            'tags',
            'x-parser-api-version',
            'x-parser-spec-parsed',
            'x-parser-schema-id',
            'x-parser-circular',
            'x-parser-message-parsed',
            'x-parser-original-traits',
            'x-parser-original-schema-format',
            'x-parser-message-name',
            'x-parser-original-payload',
        ]);
    
        ajv.addSchema(schema, key);
    
        const valid = ajv.validate({ $ref: ref }, obj);
    
        if(!valid) {
            console.error(JSON.stringify(ajv.errors ?? {}));
            return {
                valid: false,
                errors: ajv.errors
            }
        }

        return {
            valid: true,
            event: obj
        }
    }
}

export {
    SchemaValidator
}
