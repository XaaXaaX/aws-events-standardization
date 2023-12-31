import { SchemaParser } from "./asyncapi/schema-parser";
import * as fs from "fs";
const path = "./Order";
const version = "1.0.0";

const parser = new SchemaParser(path);
Promise.resolve(parser.initSchema("1.0.0")).then(
    () => {
        fs.writeFileSync(`${path}/${version}/schema.ts`, 'export const schema = ' + Buffer.from(JSON.stringify(parser.schema)))
    }
).catch(
    (err) => console.error(err)
);