# Streams documentation and validation

When designing event driven architecures the core concept is Event , an event presents a priviously happened change in the system.

Event driven systems like Apis need promises and contracts but due to the consumption based nature of events their lifecycle differs a bit from Api contracts.

## AsyncApi ?

Using async api we provide specs around Event standards like pub/sub, this way of working, drives us toward the spec first approach and challeng us around Event Storming.

## Validation

The Event Validation is the responsability of both producer and consumer side, but the responsabilty of providig the required material to help the consumer validate the events with minimum effort will be in producer side.

## Consumption

Consuming events has its proper challenges as the different types of can be published to the same broker and the consumer need to decide which one is in its interest, but as well this need a proper way of consumption using filtering and to be able to have a simlified and helpful filtering mecanisme we need to make events based on a well defined standard.

## Lets Validate

You can find a sample asyncapi definition at [here](../../docs/streams/internal/v1/definition.yml).

we need to genrate the json defnition before using ajv using `@asynapi-parser` package

## Schema Generator

The Shema can be parsed via file or url , the generator translate the asyncapi into a typescript const.

The validation involve verifing the event against a path to schema component in generated schema. [here](./gen-ts-schema-from-asyncapi-spec.ts)

### Why we need a shcema?

The process of validation must be consucted by asyncapi specification, so for any single event we need to validate that event against the specification. Vlaidating against a url or file add some hard dependency for a simple validation to the network or I/O.

### How do that?

#### From file

To lighten the validation process we generae a typescript variable consisting of json schema from out asyncapi in developement phase using following command

``` shell
    > cd dev-tools/api-docs-tools
    > npm i & npm run generate-ts-schema -- --spec-file-path=../docs/Order/1.0.0/asyncapi.yaml  --dest-file-path=../src/shared/specs/order/order-v1-schema.ts
```


#### From URI

> you can as well generate a schema form an api definition uing http/https Url

``` shell
    npm run generate-ts-schema -- --spec-file-path=https://mydocurl/asyncapi.yaml  --dest-file-path=../../src/node/Shared/Specs/order-v1-schema.ts
```

## Generation Alternative way

You can as well do a simple parsing of asyncapi yaml file to json using the online free tools and create a variable in your code source manualy.

Here some online free tools:

- https://onlineyamltools.com/convert-yaml-to-json
- https://jsonformatter.org/yaml-to-json
- https://www.json2yaml.com/convert-yaml-to-json

## Type Generator

While development you need to generate the types and objects in your prefered programmng language to have a simpler development phase.
Having a simpler way to generate types and use them is a practice since decades and we are just add some tooling here to simplify this process.

### From File

[here](./gen-ts-types-from-asyncapi-spec.ts) the type generator for typescript.

``` shell
    npm run generate-models -- --spec-file-path=../docs/Order/1.0.0/asyncapi.yaml  --dest-file-path=../src/shared/specs/order/order-v1-models.ts
```
