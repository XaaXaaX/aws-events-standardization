import { Parser, fromFile } from "@asyncapi/parser";
class SchemaParser {
    schema: Record<string, any>; 
    asyncapiParser: Parser;
    defaultFile = 'asyncapi.yaml';
    constructor(
        private readonly path: string, 
        private readonly file?: string
    ) {
            this.file = file ?? this.defaultFile ;
            this.path = path;
            this.asyncapiParser = new Parser();
    }

    getParser = async (path: string) => {
        // return await fromURL(this.asyncapiParser, path).parse();
        return await fromFile(this.asyncapiParser, path).parse();
    }       

    initSchema = async (specVersion: string) => {
        const ver = specVersion;
        const data = await this.getParser(`${this.path}/${ver}/${this.file}`);
        this.schema = data.document?.json() ?? {};
    }
}

export {
    SchemaParser
}
