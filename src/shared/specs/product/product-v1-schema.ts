export const schema={
  "asyncapi": "2.6.0",
  "info": {
    "title": "product system event Specification (v1)",
    "version": "v1.0"
  },
  "servers": {
    "eventTopic": {
      "url": "aws-product-event-standardization-topic",
      "protocol": "HTTP",
      "description": "This is the product event topic."
    }
  },
  "channels": {
    "product-events": {
      "servers": [
        "eventTopic"
      ],
      "subscribe": {
        "message": {
          "oneOf": [
            {
              "payload": {
                "type": "object",
                "additionalProperties": false,
                "allOf": [
                  {
                    "type": "object",
                    "allOf": [
                      {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "description": "CloudEvents Specification JSON Schema",
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-6>"
                          },
                          "source": {
                            "type": "string",
                            "format": "uri-reference",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-7>"
                          },
                          "specversion": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-8>"
                          },
                          "type": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-9>"
                          },
                          "datacontenttype": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-10>"
                          },
                          "dataschema": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "format": "uri",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-11>"
                          },
                          "subject": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-12>"
                          },
                          "time": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "format": "date-time",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-13>"
                          },
                          "data": {
                            "type": [
                              "object",
                              "string",
                              "number",
                              "array",
                              "boolean",
                              "null"
                            ],
                            "x-parser-schema-id": "<anonymous-schema-14>"
                          },
                          "data_base64": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "contentEncoding": "base64",
                            "x-parser-schema-id": "<anonymous-schema-15>"
                          }
                        },
                        "required": [
                          "id",
                          "source",
                          "specversion",
                          "type"
                        ],
                        "definitions": {
                          "iddef": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-6>"
                          },
                          "sourcedef": {
                            "type": "string",
                            "format": "uri-reference",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-7>"
                          },
                          "specversiondef": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-8>"
                          },
                          "typedef": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-9>"
                          },
                          "datacontenttypedef": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-10>"
                          },
                          "dataschemadef": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "format": "uri",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-11>"
                          },
                          "subjectdef": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-12>"
                          },
                          "timedef": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "format": "date-time",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-13>"
                          },
                          "datadef": {
                            "type": [
                              "object",
                              "string",
                              "number",
                              "array",
                              "boolean",
                              "null"
                            ],
                            "x-parser-schema-id": "<anonymous-schema-14>"
                          },
                          "data_base64def": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "contentEncoding": "base64",
                            "x-parser-schema-id": "<anonymous-schema-15>"
                          }
                        },
                        "x-parser-schema-id": "<anonymous-schema-5>"
                      }
                    ],
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "x-parser-schema-id": "<anonymous-schema-2>"
                      },
                      "eventcategory": {
                        "type": "string",
                        "enum": [
                          "IntegrationEvent",
                          "DeltaEvent",
                          "NotificationEvent",
                          "CarriedStateEvent"
                        ],
                        "x-parser-schema-id": "EventCategory"
                      },
                      "idempotencykey": {
                        "type": "string",
                        "format": "uuid",
                        "x-parser-schema-id": "<anonymous-schema-3>"
                      },
                      "correlationid": {
                        "type": "string",
                        "format": "uuid",
                        "x-parser-schema-id": "<anonymous-schema-4>"
                      }
                    },
                    "x-parser-schema-id": "EventEnvelope"
                  }
                ],
                "properties": {
                  "data": {
                    "type": "object",
                    "properties": {
                      "productId": {
                        "description": "The unique identifier of an product",
                        "type": "string",
                        "pattern": "^([A-Za-z0-9_-]{21})$",
                        "x-parser-schema-id": "productId"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-1>"
                  },
                  "type": {
                    "type": "string",
                    "enum": [
                      "product.availability-confirmed.v1"
                    ],
                    "x-parser-schema-id": "EventType"
                  }
                },
                "required": [
                  "data"
                ],
                "x-parser-schema-id": "ProductAvailabilityConfirmedEvent"
              },
              "x-parser-message-name": "ProductAvailabilityConfirmedEvent"
            }
          ]
        }
      }
    }
  },
  "components": {
    "messages": {
      "ProductAvailabilityConfirmedEvent": {
        "payload": {
          "type": "object",
          "additionalProperties": false,
          "allOf": [
            {
              "type": "object",
              "allOf": [
                {
                  "$schema": "http://json-schema.org/draft-07/schema#",
                  "description": "CloudEvents Specification JSON Schema",
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-6>"
                    },
                    "source": {
                      "type": "string",
                      "format": "uri-reference",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "specversion": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-8>"
                    },
                    "type": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-9>"
                    },
                    "datacontenttype": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-10>"
                    },
                    "dataschema": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "format": "uri",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-11>"
                    },
                    "subject": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-12>"
                    },
                    "time": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "format": "date-time",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-13>"
                    },
                    "data": {
                      "type": [
                        "object",
                        "string",
                        "number",
                        "array",
                        "boolean",
                        "null"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-14>"
                    },
                    "data_base64": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "contentEncoding": "base64",
                      "x-parser-schema-id": "<anonymous-schema-15>"
                    }
                  },
                  "required": [
                    "id",
                    "source",
                    "specversion",
                    "type"
                  ],
                  "definitions": {
                    "iddef": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-6>"
                    },
                    "sourcedef": {
                      "type": "string",
                      "format": "uri-reference",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "specversiondef": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-8>"
                    },
                    "typedef": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-9>"
                    },
                    "datacontenttypedef": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-10>"
                    },
                    "dataschemadef": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "format": "uri",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-11>"
                    },
                    "subjectdef": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-12>"
                    },
                    "timedef": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "format": "date-time",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-13>"
                    },
                    "datadef": {
                      "type": [
                        "object",
                        "string",
                        "number",
                        "array",
                        "boolean",
                        "null"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-14>"
                    },
                    "data_base64def": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "contentEncoding": "base64",
                      "x-parser-schema-id": "<anonymous-schema-15>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-5>"
                }
              ],
              "properties": {
                "id": {
                  "type": "string",
                  "format": "uuid",
                  "x-parser-schema-id": "<anonymous-schema-2>"
                },
                "eventcategory": {
                  "type": "string",
                  "enum": [
                    "IntegrationEvent",
                    "DeltaEvent",
                    "NotificationEvent",
                    "CarriedStateEvent"
                  ],
                  "x-parser-schema-id": "EventCategory"
                },
                "idempotencykey": {
                  "type": "string",
                  "format": "uuid",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "correlationid": {
                  "type": "string",
                  "format": "uuid",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                }
              },
              "x-parser-schema-id": "EventEnvelope"
            }
          ],
          "properties": {
            "data": {
              "type": "object",
              "properties": {
                "productId": {
                  "description": "The unique identifier of an product",
                  "type": "string",
                  "pattern": "^([A-Za-z0-9_-]{21})$",
                  "x-parser-schema-id": "productId"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-1>"
            },
            "type": {
              "type": "string",
              "enum": [
                "product.availability-confirmed.v1"
              ],
              "x-parser-schema-id": "EventType"
            }
          },
          "required": [
            "data"
          ],
          "x-parser-schema-id": "ProductAvailabilityConfirmedEvent"
        },
        "x-parser-message-name": "ProductAvailabilityConfirmedEvent"
      }
    },
    "schemas": {
      "productId": {
        "description": "The unique identifier of an product",
        "type": "string",
        "pattern": "^([A-Za-z0-9_-]{21})$",
        "x-parser-schema-id": "productId"
      },
      "Product": {
        "required": [
          "productId",
          "price",
          "quantity",
          "date"
        ],
        "type": "object",
        "description": "product model",
        "properties": {
          "productId": {
            "description": "The unique identifier of an product",
            "type": "string",
            "pattern": "^([A-Za-z0-9_-]{21})$",
            "x-parser-schema-id": "productId"
          },
          "date": {
            "description": "Date of product submition.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-16>"
          },
          "price": {
            "type": "number",
            "x-parser-schema-id": "<anonymous-schema-17>"
          },
          "quantity": {
            "type": "integer",
            "x-parser-schema-id": "<anonymous-schema-18>"
          }
        },
        "title": "Product",
        "x-parser-schema-id": "Product"
      },
      "EventEnvelope": {
        "type": "object",
        "allOf": [
          {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "description": "CloudEvents Specification JSON Schema",
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "source": {
                "type": "string",
                "format": "uri-reference",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "specversion": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "type": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "datacontenttype": {
                "type": [
                  "string",
                  "null"
                ],
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "dataschema": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "uri",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "subject": {
                "type": [
                  "string",
                  "null"
                ],
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "time": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "data": {
                "type": [
                  "object",
                  "string",
                  "number",
                  "array",
                  "boolean",
                  "null"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "data_base64": {
                "type": [
                  "string",
                  "null"
                ],
                "contentEncoding": "base64",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "required": [
              "id",
              "source",
              "specversion",
              "type"
            ],
            "definitions": {
              "iddef": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "sourcedef": {
                "type": "string",
                "format": "uri-reference",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "specversiondef": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "typedef": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "datacontenttypedef": {
                "type": [
                  "string",
                  "null"
                ],
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "dataschemadef": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "uri",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "subjectdef": {
                "type": [
                  "string",
                  "null"
                ],
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "timedef": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "datadef": {
                "type": [
                  "object",
                  "string",
                  "number",
                  "array",
                  "boolean",
                  "null"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "data_base64def": {
                "type": [
                  "string",
                  "null"
                ],
                "contentEncoding": "base64",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-5>"
          }
        ],
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "eventcategory": {
            "type": "string",
            "enum": [
              "IntegrationEvent",
              "DeltaEvent",
              "NotificationEvent",
              "CarriedStateEvent"
            ],
            "x-parser-schema-id": "EventCategory"
          },
          "idempotencykey": {
            "type": "string",
            "format": "uuid",
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "correlationid": {
            "type": "string",
            "format": "uuid",
            "x-parser-schema-id": "<anonymous-schema-4>"
          }
        },
        "x-parser-schema-id": "EventEnvelope"
      },
      "EventType": {
        "type": "string",
        "enum": [
          "product.availability-confirmed.v1"
        ],
        "x-parser-schema-id": "EventType"
      },
      "EventCategory": {
        "type": "string",
        "enum": [
          "IntegrationEvent",
          "DeltaEvent",
          "NotificationEvent",
          "CarriedStateEvent"
        ],
        "x-parser-schema-id": "EventCategory"
      },
      "ProductAvailabilityConfirmedEvent": {
        "type": "object",
        "additionalProperties": false,
        "allOf": [
          {
            "type": "object",
            "allOf": [
              {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "description": "CloudEvents Specification JSON Schema",
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "source": {
                    "type": "string",
                    "format": "uri-reference",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "specversion": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "type": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "datacontenttype": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "dataschema": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "format": "uri",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "subject": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "time": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "format": "date-time",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "data": {
                    "type": [
                      "object",
                      "string",
                      "number",
                      "array",
                      "boolean",
                      "null"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "data_base64": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "contentEncoding": "base64",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  }
                },
                "required": [
                  "id",
                  "source",
                  "specversion",
                  "type"
                ],
                "definitions": {
                  "iddef": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "sourcedef": {
                    "type": "string",
                    "format": "uri-reference",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "specversiondef": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "typedef": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "datacontenttypedef": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "dataschemadef": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "format": "uri",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "subjectdef": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "timedef": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "format": "date-time",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "datadef": {
                    "type": [
                      "object",
                      "string",
                      "number",
                      "array",
                      "boolean",
                      "null"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "data_base64def": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "contentEncoding": "base64",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "eventcategory": {
                "type": "string",
                "enum": [
                  "IntegrationEvent",
                  "DeltaEvent",
                  "NotificationEvent",
                  "CarriedStateEvent"
                ],
                "x-parser-schema-id": "EventCategory"
              },
              "idempotencykey": {
                "type": "string",
                "format": "uuid",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "correlationid": {
                "type": "string",
                "format": "uuid",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "EventEnvelope"
          }
        ],
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "productId": {
                "description": "The unique identifier of an product",
                "type": "string",
                "pattern": "^([A-Za-z0-9_-]{21})$",
                "x-parser-schema-id": "productId"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "type": {
            "type": "string",
            "enum": [
              "product.availability-confirmed.v1"
            ],
            "x-parser-schema-id": "EventType"
          }
        },
        "required": [
          "data"
        ],
        "x-parser-schema-id": "ProductAvailabilityConfirmedEvent"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 1
}