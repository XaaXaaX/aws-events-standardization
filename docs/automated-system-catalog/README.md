# Automated Event Catalog

The Event catalog can generate the Domain / Service and Event from async api using plugins.

The `@eventcatalog/plugin-doc-generator-asyncapi` plugin helps to enrich an existing event catalog based on the asyncApi definition.

We need to define the plugin in `eventcatalog.config.js` as a generator.

[generator config](eventcatalog.config.js#L44)

Now we run following command

``` shell
npm run generate
```

The Genrator will find the Service name from the asyncapi definition using the title attribute in info block.

``` yaml
info:
    title: my service name
```

The Events will be detected from the channel part and the generator will detect all used messages in channels and create corresponding event in specified domain indicating the consumer of event and detected sevice.

[learn more about AsyncApi Generator](https://www.eventcatalog.dev/blog/2022/01/19/releasing-asyncapi-plugin)
