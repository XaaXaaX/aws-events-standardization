import { SchemaValidator } from '../asyncapi/schema-validator';

const validatorVersion1 = new SchemaValidator();

const validate = async (event: any) => {
    const schema = await import(`../Order/${event.dataVersion}/shcema`);
    return validatorVersion1.validate(event, schema)
}

export { validate };
