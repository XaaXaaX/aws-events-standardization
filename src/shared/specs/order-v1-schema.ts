export const schema={
  "asyncapi": "2.6.0",
  "info": {
    "version": "1.0.0",
    "title": "Service Name",
    "description": "Service that handles A Domain."
  },
  "servers": {
    "Topic": {
      "url": "yourdomainname-sns-topic",
      "protocol": "HTTP"
    }
  },
  "channels": {
    "OrderService": {
      "servers": [
        "Topic"
      ],
      "subscribe": {
        "summary": "Subscribe to receive notification events.",
        "message": {
          "oneOf": [
            {
              "name": "OrderNotificationEvent",
              "payload": {
                "allOf": [
                  {
                    "type": "object",
                    "required": [
                      "specVersion",
                      "time",
                      "id",
                      "source",
                      "type",
                      "idempotencyKey"
                    ],
                    "properties": {
                      "specVersion": {
                        "type": "string",
                        "default": "1.0.2",
                        "x-parser-schema-id": "<anonymous-schema-1>"
                      },
                      "time": {
                        "type": "string",
                        "format": "date-time",
                        "x-parser-schema-id": "<anonymous-schema-2>"
                      },
                      "id": {
                        "type": "string",
                        "description": "An event identifier that must be unique for the source context\n",
                        "x-parser-schema-id": "<anonymous-schema-3>"
                      },
                      "source": {
                        "type": "string",
                        "description": "reprenets the information to identify the event producer\n",
                        "examples": [
                          "Domain.order.Application"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-4>"
                      },
                      "subject": {
                        "type": "string",
                        "description": "This represents complementary info to help better identify the event.\nThis is under study for the moment. \n",
                        "x-parser-schema-id": "<anonymous-schema-5>"
                      },
                      "type": {
                        "type": "string",
                        "description": "define the type of events representing a change in te system occured.\n",
                        "enum": [
                          "order.received.v1",
                          "order.confirmed.v1",
                          "order.validated.v1",
                          "order.rejected.v1"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      },
                      "category": {
                        "type": "string",
                        "description": "The category defines the different categories of events helping the consumers for filtering.\nThis is useful if there are multiple category of events publishing in the same broker.\nThe consumers can decide based on category how they would like to process the event \n  - Are they intersted about Notifications? \n  - Are they intersted about Integration Evnets? \n  - How the need to parse the data , actually if it's needed ? \n  - Detect the standard format behind the event, Delta , Domain , Aggregated, Integration or Notification Event ? \n",
                        "enum": [
                          "IntegrationEvent",
                          "DomainEvent",
                          "NotificationEvent",
                          "DeltaEvent",
                          "EventCarriedStateTransfer"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-7>"
                      },
                      "idempotencyKey": {
                        "type": "string",
                        "description": "This is a unique key produced to help consumers better handle the idempotency in case of retries.   \nhere and example of generating an idempotencyKey in nodejs\n```\nconst idempotencyKey: string = uuidV5(\n  JSON.stringify(order),\n  namespaces.orders\n);\n```\n",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "dataContentType": {
                        "type": "string",
                        "default": "JSON",
                        "description": "The dataContentType defines the format used in data object and helps for parsing purpose. \nNOTE: The actual decision is use the JSON as an standard, this can be evolved in the future.\n",
                        "enum": [
                          "JSON",
                          "AVRO",
                          "PROTOBUF"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "dataSchema": {
                        "type": "string",
                        "description": "The path to json-schema or asyncapi schema provided by producer to be used in validation part.\nThis must be better clarified during the study and with examples.\n",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "dataVersion": {
                        "type": "string",
                        "description": "The data version , this helps the consumers to better automate and treat the Parsing, Filtering and validation of events.\n",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      }
                    },
                    "x-parser-schema-id": "Event"
                  }
                ],
                "x-parser-schema-id": "OrderNotificationEvent"
              }
            },
            {
              "name": "OrderIntegrationEvent",
              "payload": {
                "allOf": [
                  {
                    "type": "object",
                    "required": [
                      "specVersion",
                      "time",
                      "id",
                      "source",
                      "type",
                      "idempotencyKey"
                    ],
                    "properties": {
                      "specVersion": {
                        "type": "string",
                        "default": "1.0.2",
                        "x-parser-schema-id": "<anonymous-schema-1>"
                      },
                      "time": {
                        "type": "string",
                        "format": "date-time",
                        "x-parser-schema-id": "<anonymous-schema-2>"
                      },
                      "id": {
                        "type": "string",
                        "description": "An event identifier that must be unique for the source context\n",
                        "x-parser-schema-id": "<anonymous-schema-3>"
                      },
                      "source": {
                        "type": "string",
                        "description": "reprenets the information to identify the event producer\n",
                        "examples": [
                          "Domain.order.Application"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-4>"
                      },
                      "subject": {
                        "type": "string",
                        "description": "This represents complementary info to help better identify the event.\nThis is under study for the moment. \n",
                        "x-parser-schema-id": "<anonymous-schema-5>"
                      },
                      "type": {
                        "type": "string",
                        "description": "define the type of events representing a change in te system occured.\n",
                        "enum": [
                          "order.received.v1",
                          "order.confirmed.v1",
                          "order.validated.v1",
                          "order.rejected.v1"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      },
                      "category": {
                        "type": "string",
                        "description": "The category defines the different categories of events helping the consumers for filtering.\nThis is useful if there are multiple category of events publishing in the same broker.\nThe consumers can decide based on category how they would like to process the event \n  - Are they intersted about Notifications? \n  - Are they intersted about Integration Evnets? \n  - How the need to parse the data , actually if it's needed ? \n  - Detect the standard format behind the event, Delta , Domain , Aggregated, Integration or Notification Event ? \n",
                        "enum": [
                          "IntegrationEvent",
                          "DomainEvent",
                          "NotificationEvent",
                          "DeltaEvent",
                          "EventCarriedStateTransfer"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-7>"
                      },
                      "idempotencyKey": {
                        "type": "string",
                        "description": "This is a unique key produced to help consumers better handle the idempotency in case of retries.   \nhere and example of generating an idempotencyKey in nodejs\n```\nconst idempotencyKey: string = uuidV5(\n  JSON.stringify(order),\n  namespaces.orders\n);\n```\n",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "dataContentType": {
                        "type": "string",
                        "default": "JSON",
                        "description": "The dataContentType defines the format used in data object and helps for parsing purpose. \nNOTE: The actual decision is use the JSON as an standard, this can be evolved in the future.\n",
                        "enum": [
                          "JSON",
                          "AVRO",
                          "PROTOBUF"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "dataSchema": {
                        "type": "string",
                        "description": "The path to json-schema or asyncapi schema provided by producer to be used in validation part.\nThis must be better clarified during the study and with examples.\n",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "dataVersion": {
                        "type": "string",
                        "description": "The data version , this helps the consumers to better automate and treat the Parsing, Filtering and validation of events.\n",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      }
                    },
                    "x-parser-schema-id": "Event"
                  },
                  {
                    "type": "object",
                    "required": [
                      "data"
                    ],
                    "properties": {
                      "data": {
                        "description": "The data represents the business related information.\nThe dataformat respects the dataCOnentType ( JSON at the moment ).\n",
                        "allOf": [
                          {
                            "allOf": [
                              {
                                "type": "object",
                                "required": [
                                  "price",
                                  "quantity"
                                ],
                                "properties": {
                                  "price": {
                                    "type": "number",
                                    "x-parser-schema-id": "<anonymous-schema-14>"
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "x-parser-schema-id": "<anonymous-schema-15>"
                                  }
                                },
                                "x-parser-schema-id": "EventDetails"
                              },
                              {
                                "type": "object",
                                "required": [
                                  "orderId"
                                ],
                                "properties": {
                                  "orderId": {
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-16>"
                                  },
                                  "productId": {
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-17>"
                                  }
                                },
                                "x-parser-schema-id": "EventMetadata"
                              }
                            ],
                            "x-parser-schema-id": "EventData"
                          }
                        ],
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  }
                ],
                "x-parser-schema-id": "OrderIntegrationEvent"
              }
            }
          ]
        }
      }
    }
  },
  "components": {
    "messages": {
      "OrderIntegrationEvent": {
        "name": "OrderIntegrationEvent",
        "payload": {
          "allOf": [
            {
              "type": "object",
              "required": [
                "specVersion",
                "time",
                "id",
                "source",
                "type",
                "idempotencyKey"
              ],
              "properties": {
                "specVersion": {
                  "type": "string",
                  "default": "1.0.2",
                  "x-parser-schema-id": "<anonymous-schema-1>"
                },
                "time": {
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-2>"
                },
                "id": {
                  "type": "string",
                  "description": "An event identifier that must be unique for the source context\n",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "source": {
                  "type": "string",
                  "description": "reprenets the information to identify the event producer\n",
                  "examples": [
                    "Domain.order.Application"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "subject": {
                  "type": "string",
                  "description": "This represents complementary info to help better identify the event.\nThis is under study for the moment. \n",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "type": {
                  "type": "string",
                  "description": "define the type of events representing a change in te system occured.\n",
                  "enum": [
                    "order.received.v1",
                    "order.confirmed.v1",
                    "order.validated.v1",
                    "order.rejected.v1"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                "category": {
                  "type": "string",
                  "description": "The category defines the different categories of events helping the consumers for filtering.\nThis is useful if there are multiple category of events publishing in the same broker.\nThe consumers can decide based on category how they would like to process the event \n  - Are they intersted about Notifications? \n  - Are they intersted about Integration Evnets? \n  - How the need to parse the data , actually if it's needed ? \n  - Detect the standard format behind the event, Delta , Domain , Aggregated, Integration or Notification Event ? \n",
                  "enum": [
                    "IntegrationEvent",
                    "DomainEvent",
                    "NotificationEvent",
                    "DeltaEvent",
                    "EventCarriedStateTransfer"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "idempotencyKey": {
                  "type": "string",
                  "description": "This is a unique key produced to help consumers better handle the idempotency in case of retries.   \nhere and example of generating an idempotencyKey in nodejs\n```\nconst idempotencyKey: string = uuidV5(\n  JSON.stringify(order),\n  namespaces.orders\n);\n```\n",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "dataContentType": {
                  "type": "string",
                  "default": "JSON",
                  "description": "The dataContentType defines the format used in data object and helps for parsing purpose. \nNOTE: The actual decision is use the JSON as an standard, this can be evolved in the future.\n",
                  "enum": [
                    "JSON",
                    "AVRO",
                    "PROTOBUF"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "dataSchema": {
                  "type": "string",
                  "description": "The path to json-schema or asyncapi schema provided by producer to be used in validation part.\nThis must be better clarified during the study and with examples.\n",
                  "x-parser-schema-id": "<anonymous-schema-10>"
                },
                "dataVersion": {
                  "type": "string",
                  "description": "The data version , this helps the consumers to better automate and treat the Parsing, Filtering and validation of events.\n",
                  "x-parser-schema-id": "<anonymous-schema-11>"
                }
              },
              "x-parser-schema-id": "Event"
            },
            {
              "type": "object",
              "required": [
                "data"
              ],
              "properties": {
                "data": {
                  "description": "The data represents the business related information.\nThe dataformat respects the dataCOnentType ( JSON at the moment ).\n",
                  "allOf": [
                    {
                      "allOf": [
                        {
                          "type": "object",
                          "required": [
                            "price",
                            "quantity"
                          ],
                          "properties": {
                            "price": {
                              "type": "number",
                              "x-parser-schema-id": "<anonymous-schema-14>"
                            },
                            "quantity": {
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-15>"
                            }
                          },
                          "x-parser-schema-id": "EventDetails"
                        },
                        {
                          "type": "object",
                          "required": [
                            "orderId"
                          ],
                          "properties": {
                            "orderId": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-16>"
                            },
                            "productId": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-17>"
                            }
                          },
                          "x-parser-schema-id": "EventMetadata"
                        }
                      ],
                      "x-parser-schema-id": "EventData"
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-13>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-12>"
            }
          ],
          "x-parser-schema-id": "OrderIntegrationEvent"
        }
      },
      "OrderNotificationEvent": {
        "name": "OrderNotificationEvent",
        "payload": {
          "allOf": [
            {
              "type": "object",
              "required": [
                "specVersion",
                "time",
                "id",
                "source",
                "type",
                "idempotencyKey"
              ],
              "properties": {
                "specVersion": {
                  "type": "string",
                  "default": "1.0.2",
                  "x-parser-schema-id": "<anonymous-schema-1>"
                },
                "time": {
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-2>"
                },
                "id": {
                  "type": "string",
                  "description": "An event identifier that must be unique for the source context\n",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "source": {
                  "type": "string",
                  "description": "reprenets the information to identify the event producer\n",
                  "examples": [
                    "Domain.order.Application"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "subject": {
                  "type": "string",
                  "description": "This represents complementary info to help better identify the event.\nThis is under study for the moment. \n",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "type": {
                  "type": "string",
                  "description": "define the type of events representing a change in te system occured.\n",
                  "enum": [
                    "order.received.v1",
                    "order.confirmed.v1",
                    "order.validated.v1",
                    "order.rejected.v1"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                "category": {
                  "type": "string",
                  "description": "The category defines the different categories of events helping the consumers for filtering.\nThis is useful if there are multiple category of events publishing in the same broker.\nThe consumers can decide based on category how they would like to process the event \n  - Are they intersted about Notifications? \n  - Are they intersted about Integration Evnets? \n  - How the need to parse the data , actually if it's needed ? \n  - Detect the standard format behind the event, Delta , Domain , Aggregated, Integration or Notification Event ? \n",
                  "enum": [
                    "IntegrationEvent",
                    "DomainEvent",
                    "NotificationEvent",
                    "DeltaEvent",
                    "EventCarriedStateTransfer"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "idempotencyKey": {
                  "type": "string",
                  "description": "This is a unique key produced to help consumers better handle the idempotency in case of retries.   \nhere and example of generating an idempotencyKey in nodejs\n```\nconst idempotencyKey: string = uuidV5(\n  JSON.stringify(order),\n  namespaces.orders\n);\n```\n",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "dataContentType": {
                  "type": "string",
                  "default": "JSON",
                  "description": "The dataContentType defines the format used in data object and helps for parsing purpose. \nNOTE: The actual decision is use the JSON as an standard, this can be evolved in the future.\n",
                  "enum": [
                    "JSON",
                    "AVRO",
                    "PROTOBUF"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "dataSchema": {
                  "type": "string",
                  "description": "The path to json-schema or asyncapi schema provided by producer to be used in validation part.\nThis must be better clarified during the study and with examples.\n",
                  "x-parser-schema-id": "<anonymous-schema-10>"
                },
                "dataVersion": {
                  "type": "string",
                  "description": "The data version , this helps the consumers to better automate and treat the Parsing, Filtering and validation of events.\n",
                  "x-parser-schema-id": "<anonymous-schema-11>"
                }
              },
              "x-parser-schema-id": "Event"
            }
          ],
          "x-parser-schema-id": "OrderNotificationEvent"
        }
      }
    },
    "schemas": {
      "EventMetadata": {
        "type": "object",
        "required": [
          "orderId"
        ],
        "properties": {
          "orderId": {
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-16>"
          },
          "productId": {
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-17>"
          }
        },
        "x-parser-schema-id": "EventMetadata"
      },
      "EventDetails": {
        "type": "object",
        "required": [
          "price",
          "quantity"
        ],
        "properties": {
          "price": {
            "type": "number",
            "x-parser-schema-id": "<anonymous-schema-14>"
          },
          "quantity": {
            "type": "integer",
            "x-parser-schema-id": "<anonymous-schema-15>"
          }
        },
        "x-parser-schema-id": "EventDetails"
      },
      "EventData": {
        "allOf": [
          {
            "type": "object",
            "required": [
              "price",
              "quantity"
            ],
            "properties": {
              "price": {
                "type": "number",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "quantity": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "EventDetails"
          },
          {
            "type": "object",
            "required": [
              "orderId"
            ],
            "properties": {
              "orderId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "productId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-17>"
              }
            },
            "x-parser-schema-id": "EventMetadata"
          }
        ],
        "x-parser-schema-id": "EventData"
      },
      "OrderNotificationEvent": {
        "allOf": [
          {
            "type": "object",
            "required": [
              "specVersion",
              "time",
              "id",
              "source",
              "type",
              "idempotencyKey"
            ],
            "properties": {
              "specVersion": {
                "type": "string",
                "default": "1.0.2",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "time": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "id": {
                "type": "string",
                "description": "An event identifier that must be unique for the source context\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "source": {
                "type": "string",
                "description": "reprenets the information to identify the event producer\n",
                "examples": [
                  "Domain.order.Application"
                ],
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "subject": {
                "type": "string",
                "description": "This represents complementary info to help better identify the event.\nThis is under study for the moment. \n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "type": {
                "type": "string",
                "description": "define the type of events representing a change in te system occured.\n",
                "enum": [
                  "order.received.v1",
                  "order.confirmed.v1",
                  "order.validated.v1",
                  "order.rejected.v1"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "category": {
                "type": "string",
                "description": "The category defines the different categories of events helping the consumers for filtering.\nThis is useful if there are multiple category of events publishing in the same broker.\nThe consumers can decide based on category how they would like to process the event \n  - Are they intersted about Notifications? \n  - Are they intersted about Integration Evnets? \n  - How the need to parse the data , actually if it's needed ? \n  - Detect the standard format behind the event, Delta , Domain , Aggregated, Integration or Notification Event ? \n",
                "enum": [
                  "IntegrationEvent",
                  "DomainEvent",
                  "NotificationEvent",
                  "DeltaEvent",
                  "EventCarriedStateTransfer"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "idempotencyKey": {
                "type": "string",
                "description": "This is a unique key produced to help consumers better handle the idempotency in case of retries.   \nhere and example of generating an idempotencyKey in nodejs\n```\nconst idempotencyKey: string = uuidV5(\n  JSON.stringify(order),\n  namespaces.orders\n);\n```\n",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "dataContentType": {
                "type": "string",
                "default": "JSON",
                "description": "The dataContentType defines the format used in data object and helps for parsing purpose. \nNOTE: The actual decision is use the JSON as an standard, this can be evolved in the future.\n",
                "enum": [
                  "JSON",
                  "AVRO",
                  "PROTOBUF"
                ],
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "dataSchema": {
                "type": "string",
                "description": "The path to json-schema or asyncapi schema provided by producer to be used in validation part.\nThis must be better clarified during the study and with examples.\n",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "dataVersion": {
                "type": "string",
                "description": "The data version , this helps the consumers to better automate and treat the Parsing, Filtering and validation of events.\n",
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "Event"
          }
        ],
        "x-parser-schema-id": "OrderNotificationEvent"
      },
      "OrderIntegrationEvent": {
        "allOf": [
          {
            "type": "object",
            "required": [
              "specVersion",
              "time",
              "id",
              "source",
              "type",
              "idempotencyKey"
            ],
            "properties": {
              "specVersion": {
                "type": "string",
                "default": "1.0.2",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "time": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "id": {
                "type": "string",
                "description": "An event identifier that must be unique for the source context\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "source": {
                "type": "string",
                "description": "reprenets the information to identify the event producer\n",
                "examples": [
                  "Domain.order.Application"
                ],
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "subject": {
                "type": "string",
                "description": "This represents complementary info to help better identify the event.\nThis is under study for the moment. \n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "type": {
                "type": "string",
                "description": "define the type of events representing a change in te system occured.\n",
                "enum": [
                  "order.received.v1",
                  "order.confirmed.v1",
                  "order.validated.v1",
                  "order.rejected.v1"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "category": {
                "type": "string",
                "description": "The category defines the different categories of events helping the consumers for filtering.\nThis is useful if there are multiple category of events publishing in the same broker.\nThe consumers can decide based on category how they would like to process the event \n  - Are they intersted about Notifications? \n  - Are they intersted about Integration Evnets? \n  - How the need to parse the data , actually if it's needed ? \n  - Detect the standard format behind the event, Delta , Domain , Aggregated, Integration or Notification Event ? \n",
                "enum": [
                  "IntegrationEvent",
                  "DomainEvent",
                  "NotificationEvent",
                  "DeltaEvent",
                  "EventCarriedStateTransfer"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "idempotencyKey": {
                "type": "string",
                "description": "This is a unique key produced to help consumers better handle the idempotency in case of retries.   \nhere and example of generating an idempotencyKey in nodejs\n```\nconst idempotencyKey: string = uuidV5(\n  JSON.stringify(order),\n  namespaces.orders\n);\n```\n",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "dataContentType": {
                "type": "string",
                "default": "JSON",
                "description": "The dataContentType defines the format used in data object and helps for parsing purpose. \nNOTE: The actual decision is use the JSON as an standard, this can be evolved in the future.\n",
                "enum": [
                  "JSON",
                  "AVRO",
                  "PROTOBUF"
                ],
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "dataSchema": {
                "type": "string",
                "description": "The path to json-schema or asyncapi schema provided by producer to be used in validation part.\nThis must be better clarified during the study and with examples.\n",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "dataVersion": {
                "type": "string",
                "description": "The data version , this helps the consumers to better automate and treat the Parsing, Filtering and validation of events.\n",
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "Event"
          },
          {
            "type": "object",
            "required": [
              "data"
            ],
            "properties": {
              "data": {
                "description": "The data represents the business related information.\nThe dataformat respects the dataCOnentType ( JSON at the moment ).\n",
                "allOf": [
                  {
                    "allOf": [
                      {
                        "type": "object",
                        "required": [
                          "price",
                          "quantity"
                        ],
                        "properties": {
                          "price": {
                            "type": "number",
                            "x-parser-schema-id": "<anonymous-schema-14>"
                          },
                          "quantity": {
                            "type": "integer",
                            "x-parser-schema-id": "<anonymous-schema-15>"
                          }
                        },
                        "x-parser-schema-id": "EventDetails"
                      },
                      {
                        "type": "object",
                        "required": [
                          "orderId"
                        ],
                        "properties": {
                          "orderId": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-16>"
                          },
                          "productId": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-17>"
                          }
                        },
                        "x-parser-schema-id": "EventMetadata"
                      }
                    ],
                    "x-parser-schema-id": "EventData"
                  }
                ],
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-12>"
          }
        ],
        "x-parser-schema-id": "OrderIntegrationEvent"
      },
      "Event": {
        "type": "object",
        "required": [
          "specVersion",
          "time",
          "id",
          "source",
          "type",
          "idempotencyKey"
        ],
        "properties": {
          "specVersion": {
            "type": "string",
            "default": "1.0.2",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "id": {
            "type": "string",
            "description": "An event identifier that must be unique for the source context\n",
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "source": {
            "type": "string",
            "description": "reprenets the information to identify the event producer\n",
            "examples": [
              "Domain.order.Application"
            ],
            "x-parser-schema-id": "<anonymous-schema-4>"
          },
          "subject": {
            "type": "string",
            "description": "This represents complementary info to help better identify the event.\nThis is under study for the moment. \n",
            "x-parser-schema-id": "<anonymous-schema-5>"
          },
          "type": {
            "type": "string",
            "description": "define the type of events representing a change in te system occured.\n",
            "enum": [
              "order.received.v1",
              "order.confirmed.v1",
              "order.validated.v1",
              "order.rejected.v1"
            ],
            "x-parser-schema-id": "<anonymous-schema-6>"
          },
          "category": {
            "type": "string",
            "description": "The category defines the different categories of events helping the consumers for filtering.\nThis is useful if there are multiple category of events publishing in the same broker.\nThe consumers can decide based on category how they would like to process the event \n  - Are they intersted about Notifications? \n  - Are they intersted about Integration Evnets? \n  - How the need to parse the data , actually if it's needed ? \n  - Detect the standard format behind the event, Delta , Domain , Aggregated, Integration or Notification Event ? \n",
            "enum": [
              "IntegrationEvent",
              "DomainEvent",
              "NotificationEvent",
              "DeltaEvent",
              "EventCarriedStateTransfer"
            ],
            "x-parser-schema-id": "<anonymous-schema-7>"
          },
          "idempotencyKey": {
            "type": "string",
            "description": "This is a unique key produced to help consumers better handle the idempotency in case of retries.   \nhere and example of generating an idempotencyKey in nodejs\n```\nconst idempotencyKey: string = uuidV5(\n  JSON.stringify(order),\n  namespaces.orders\n);\n```\n",
            "x-parser-schema-id": "<anonymous-schema-8>"
          },
          "dataContentType": {
            "type": "string",
            "default": "JSON",
            "description": "The dataContentType defines the format used in data object and helps for parsing purpose. \nNOTE: The actual decision is use the JSON as an standard, this can be evolved in the future.\n",
            "enum": [
              "JSON",
              "AVRO",
              "PROTOBUF"
            ],
            "x-parser-schema-id": "<anonymous-schema-9>"
          },
          "dataSchema": {
            "type": "string",
            "description": "The path to json-schema or asyncapi schema provided by producer to be used in validation part.\nThis must be better clarified during the study and with examples.\n",
            "x-parser-schema-id": "<anonymous-schema-10>"
          },
          "dataVersion": {
            "type": "string",
            "description": "The data version , this helps the consumers to better automate and treat the Parsing, Filtering and validation of events.\n",
            "x-parser-schema-id": "<anonymous-schema-11>"
          }
        },
        "x-parser-schema-id": "Event"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 1
}