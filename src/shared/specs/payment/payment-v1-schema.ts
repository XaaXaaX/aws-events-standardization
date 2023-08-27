export const schema={
  "asyncapi": "2.6.0",
  "info": {
    "title": "payment system event Specification (v1)",
    "version": "v1.0"
  },
  "servers": {
    "eventTopic": {
      "url": "aws-payment-event-standardization-topic",
      "protocol": "HTTP",
      "description": "This is the payment event topic."
    }
  },
  "channels": {
    "payment-events": {
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
                            "x-parser-schema-id": "<anonymous-schema-7>"
                          },
                          "source": {
                            "type": "string",
                            "format": "uri-reference",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-8>"
                          },
                          "specversion": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-9>"
                          },
                          "type": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-10>"
                          },
                          "datacontenttype": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-11>"
                          },
                          "dataschema": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "format": "uri",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-12>"
                          },
                          "subject": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-13>"
                          },
                          "time": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "format": "date-time",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-14>"
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
                            "x-parser-schema-id": "<anonymous-schema-15>"
                          },
                          "data_base64": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "contentEncoding": "base64",
                            "x-parser-schema-id": "<anonymous-schema-16>"
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
                            "x-parser-schema-id": "<anonymous-schema-7>"
                          },
                          "sourcedef": {
                            "type": "string",
                            "format": "uri-reference",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-8>"
                          },
                          "specversiondef": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-9>"
                          },
                          "typedef": {
                            "type": "string",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-10>"
                          },
                          "datacontenttypedef": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-11>"
                          },
                          "dataschemadef": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "format": "uri",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-12>"
                          },
                          "subjectdef": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-13>"
                          },
                          "timedef": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "format": "date-time",
                            "minLength": 1,
                            "x-parser-schema-id": "<anonymous-schema-14>"
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
                            "x-parser-schema-id": "<anonymous-schema-15>"
                          },
                          "data_base64def": {
                            "type": [
                              "string",
                              "null"
                            ],
                            "contentEncoding": "base64",
                            "x-parser-schema-id": "<anonymous-schema-16>"
                          }
                        },
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      }
                    ],
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "x-parser-schema-id": "<anonymous-schema-3>"
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
                        "x-parser-schema-id": "<anonymous-schema-4>"
                      },
                      "correlationid": {
                        "type": "string",
                        "format": "uuid",
                        "x-parser-schema-id": "<anonymous-schema-5>"
                      }
                    },
                    "x-parser-schema-id": "EventEnvelope"
                  }
                ],
                "properties": {
                  "data": {
                    "required": [
                      "paymentId",
                      "orderId",
                      "amount",
                      "date"
                    ],
                    "type": "object",
                    "description": "payment model",
                    "properties": {
                      "paymentId": {
                        "description": "The unique identifier of an payment",
                        "type": "string",
                        "pattern": "^([A-Za-z0-9_-]{21})$",
                        "x-parser-schema-id": "paymentId"
                      },
                      "date": {
                        "description": "Date of payment submition.",
                        "type": "string",
                        "format": "date-time",
                        "x-parser-schema-id": "<anonymous-schema-1>"
                      },
                      "orderId": {
                        "description": "The unique identifier of a user",
                        "type": "string",
                        "pattern": "^([A-Za-z0-9_-]{21})$",
                        "x-parser-schema-id": "orderId"
                      },
                      "amount": {
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-2>"
                      }
                    },
                    "title": "Payment",
                    "x-parser-schema-id": "Payment"
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
                  "type": {
                    "type": "string",
                    "enum": [
                      "payment.received.v1",
                      "payment.Confirmed.v1"
                    ],
                    "x-parser-schema-id": "EventType"
                  }
                },
                "required": [
                  "data"
                ],
                "x-parser-schema-id": "PaymentConfirmedEvent"
              },
              "x-parser-message-name": "PaymentConfirmedEvent"
            }
          ]
        }
      }
    }
  },
  "components": {
    "messages": {
      "PaymentConfirmedEvent": {
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
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "source": {
                      "type": "string",
                      "format": "uri-reference",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-8>"
                    },
                    "specversion": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-9>"
                    },
                    "type": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-10>"
                    },
                    "datacontenttype": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-11>"
                    },
                    "dataschema": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "format": "uri",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-12>"
                    },
                    "subject": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-13>"
                    },
                    "time": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "format": "date-time",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-14>"
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
                      "x-parser-schema-id": "<anonymous-schema-15>"
                    },
                    "data_base64": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "contentEncoding": "base64",
                      "x-parser-schema-id": "<anonymous-schema-16>"
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
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "sourcedef": {
                      "type": "string",
                      "format": "uri-reference",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-8>"
                    },
                    "specversiondef": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-9>"
                    },
                    "typedef": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-10>"
                    },
                    "datacontenttypedef": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-11>"
                    },
                    "dataschemadef": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "format": "uri",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-12>"
                    },
                    "subjectdef": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-13>"
                    },
                    "timedef": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "format": "date-time",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-14>"
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
                      "x-parser-schema-id": "<anonymous-schema-15>"
                    },
                    "data_base64def": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "contentEncoding": "base64",
                      "x-parser-schema-id": "<anonymous-schema-16>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-6>"
                }
              ],
              "properties": {
                "id": {
                  "type": "string",
                  "format": "uuid",
                  "x-parser-schema-id": "<anonymous-schema-3>"
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
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "correlationid": {
                  "type": "string",
                  "format": "uuid",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                }
              },
              "x-parser-schema-id": "EventEnvelope"
            }
          ],
          "properties": {
            "data": {
              "required": [
                "paymentId",
                "orderId",
                "amount",
                "date"
              ],
              "type": "object",
              "description": "payment model",
              "properties": {
                "paymentId": {
                  "description": "The unique identifier of an payment",
                  "type": "string",
                  "pattern": "^([A-Za-z0-9_-]{21})$",
                  "x-parser-schema-id": "paymentId"
                },
                "date": {
                  "description": "Date of payment submition.",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-1>"
                },
                "orderId": {
                  "description": "The unique identifier of a user",
                  "type": "string",
                  "pattern": "^([A-Za-z0-9_-]{21})$",
                  "x-parser-schema-id": "orderId"
                },
                "amount": {
                  "type": "number",
                  "x-parser-schema-id": "<anonymous-schema-2>"
                }
              },
              "title": "Payment",
              "x-parser-schema-id": "Payment"
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
            "type": {
              "type": "string",
              "enum": [
                "payment.received.v1",
                "payment.Confirmed.v1"
              ],
              "x-parser-schema-id": "EventType"
            }
          },
          "required": [
            "data"
          ],
          "x-parser-schema-id": "PaymentConfirmedEvent"
        },
        "x-parser-message-name": "PaymentConfirmedEvent"
      }
    },
    "schemas": {
      "paymentId": {
        "description": "The unique identifier of an payment",
        "type": "string",
        "pattern": "^([A-Za-z0-9_-]{21})$",
        "x-parser-schema-id": "paymentId"
      },
      "orderId": {
        "description": "The unique identifier of a user",
        "type": "string",
        "pattern": "^([A-Za-z0-9_-]{21})$",
        "x-parser-schema-id": "orderId"
      },
      "Payment": {
        "required": [
          "paymentId",
          "orderId",
          "amount",
          "date"
        ],
        "type": "object",
        "description": "payment model",
        "properties": {
          "paymentId": {
            "description": "The unique identifier of an payment",
            "type": "string",
            "pattern": "^([A-Za-z0-9_-]{21})$",
            "x-parser-schema-id": "paymentId"
          },
          "date": {
            "description": "Date of payment submition.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "orderId": {
            "description": "The unique identifier of a user",
            "type": "string",
            "pattern": "^([A-Za-z0-9_-]{21})$",
            "x-parser-schema-id": "orderId"
          },
          "amount": {
            "type": "number",
            "x-parser-schema-id": "<anonymous-schema-2>"
          }
        },
        "title": "Payment",
        "x-parser-schema-id": "Payment"
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
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "source": {
                "type": "string",
                "format": "uri-reference",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "specversion": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "type": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "datacontenttype": {
                "type": [
                  "string",
                  "null"
                ],
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "dataschema": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "uri",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "subject": {
                "type": [
                  "string",
                  "null"
                ],
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "time": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-14>"
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
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "data_base64": {
                "type": [
                  "string",
                  "null"
                ],
                "contentEncoding": "base64",
                "x-parser-schema-id": "<anonymous-schema-16>"
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
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "sourcedef": {
                "type": "string",
                "format": "uri-reference",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "specversiondef": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "typedef": {
                "type": "string",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "datacontenttypedef": {
                "type": [
                  "string",
                  "null"
                ],
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "dataschemadef": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "uri",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "subjectdef": {
                "type": [
                  "string",
                  "null"
                ],
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "timedef": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-14>"
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
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "data_base64def": {
                "type": [
                  "string",
                  "null"
                ],
                "contentEncoding": "base64",
                "x-parser-schema-id": "<anonymous-schema-16>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-6>"
          }
        ],
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid",
            "x-parser-schema-id": "<anonymous-schema-3>"
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
            "x-parser-schema-id": "<anonymous-schema-4>"
          },
          "correlationid": {
            "type": "string",
            "format": "uuid",
            "x-parser-schema-id": "<anonymous-schema-5>"
          }
        },
        "x-parser-schema-id": "EventEnvelope"
      },
      "EventType": {
        "type": "string",
        "enum": [
          "payment.received.v1",
          "payment.Confirmed.v1"
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
      "PaymentConfirmedEvent": {
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
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "source": {
                    "type": "string",
                    "format": "uri-reference",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "specversion": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "type": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "datacontenttype": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "dataschema": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "format": "uri",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "subject": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "time": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "format": "date-time",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-14>"
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
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "data_base64": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "contentEncoding": "base64",
                    "x-parser-schema-id": "<anonymous-schema-16>"
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
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "sourcedef": {
                    "type": "string",
                    "format": "uri-reference",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "specversiondef": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "typedef": {
                    "type": "string",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "datacontenttypedef": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "dataschemadef": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "format": "uri",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "subjectdef": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "timedef": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "format": "date-time",
                    "minLength": 1,
                    "x-parser-schema-id": "<anonymous-schema-14>"
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
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "data_base64def": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "contentEncoding": "base64",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid",
                "x-parser-schema-id": "<anonymous-schema-3>"
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
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "correlationid": {
                "type": "string",
                "format": "uuid",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "EventEnvelope"
          }
        ],
        "properties": {
          "data": {
            "required": [
              "paymentId",
              "orderId",
              "amount",
              "date"
            ],
            "type": "object",
            "description": "payment model",
            "properties": {
              "paymentId": {
                "description": "The unique identifier of an payment",
                "type": "string",
                "pattern": "^([A-Za-z0-9_-]{21})$",
                "x-parser-schema-id": "paymentId"
              },
              "date": {
                "description": "Date of payment submition.",
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "orderId": {
                "description": "The unique identifier of a user",
                "type": "string",
                "pattern": "^([A-Za-z0-9_-]{21})$",
                "x-parser-schema-id": "orderId"
              },
              "amount": {
                "type": "number",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "title": "Payment",
            "x-parser-schema-id": "Payment"
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
          "type": {
            "type": "string",
            "enum": [
              "payment.received.v1",
              "payment.Confirmed.v1"
            ],
            "x-parser-schema-id": "EventType"
          }
        },
        "required": [
          "data"
        ],
        "x-parser-schema-id": "PaymentConfirmedEvent"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 1
}