import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajvOptions = {
  	allErrors: true,
};

class SchemaValidator {
    validate = async (event: any, schema: any) => {
        return this.AjvValidate(event, schema, event.dataSchema?.split('#')[0], event.dataSchema);
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
    
        if (!valid) {
            const errorMessage = JSON.stringify(ajv.errors);
            throw new Error(errorMessage);
        }
    
        return valid;
    }
}

export {
    SchemaValidator
}
