# Streams documentation and validation

When designing event driven architecures the core concept is Event , an event presents a priviously happened change in the systm.

Streaming systems like Apis need promises and contracts but due to the consumption based nature of events their lifecycle differs a bit from Api contracts.

## AsyncApi ?

Using async api we provide specs around Event streaming standards like pub/sub this way of working push us toward the spec first approach and challeng us around Event Storming.

## Validation

The Event Validation is the responsability of producer but as a nice to have or best practice we encourage to validate an event in consumer side as well, but the responsabilty of providig the required material to help the consumer validate the events with minimum effort will be in producer side.

## Consumption

Consuming events has its proper challenges as the different types of can be published to the same broker and the consumer need to decide which one is in its interest, but as well this need a proper way of consumption using filtering and to be able to have a simlified and helpful filtering mecanisme we need to make events based on a well defined standard.

## Lets Validate

You can find a sample asyncapi definition at [here](./Order/v1/asyncapi.yaml).


we need to fetch the json defnition before using ajv using `@asynapi-parser` package , the implementation can be find [here](./asyncapi/schema-validator.js).

## Schema Generator

The Shema can be parsed via file or url , the generator translate the asyncapi into a typescript const.

The validation involve verifing the event against a path to shcela component in generated shchema. [here](./generator.ts)

## Versioned validation

Any Version idealy is represented by a Asyncapi definition, so we generate a schema per definition and introduce the corresponding validator.[here](./Order/v1/validator.ts)
