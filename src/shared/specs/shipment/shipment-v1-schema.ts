export const schema={
  "asyncapi": "2.6.0",
  "info": {
    "title": "shipment system event Specification (v1)",
    "version": "v1.0"
  },
  "servers": {
    "eventTopic": {
      "url": "aws-shipment-event-standardization-topic",
      "protocol": "HTTP",
      "description": "This is the shipment event topic."
    }
  },
  "channels": {
    "shipment-events": {
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
                    "required": [
                      "shipmentId",
                      "orderId",
                      "date"
                    ],
                    "type": "object",
                    "description": "shipment model",
                    "properties": {
                      "shipmentId": {
                        "description": "The unique identifier of an shipment",
                        "type": "string",
                        "pattern": "^([A-Za-z0-9_-]{21})$",
                        "x-parser-schema-id": "shipmentId"
                      },
                      "date": {
                        "description": "Date of shipment submition.",
                        "type": "string",
                        "format": "date-time",
                        "x-parser-schema-id": "<anonymous-schema-1>"
                      },
                      "userId": {
                        "description": "The unique identifier of a user",
                        "type": "string",
                        "pattern": "^([A-Za-z0-9_-]{21})$",
                        "x-parser-schema-id": "orderId"
                      }
                    },
                    "title": "Shipment",
                    "x-parser-schema-id": "Shipment"
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
                      "shipment.received.v1",
                      "shipment.Confirmed.v1"
                    ],
                    "x-parser-schema-id": "EventType"
                  }
                },
                "required": [
                  "data"
                ],
                "x-parser-schema-id": "ShipmentDeliveredEvent"
              },
              "x-parser-message-name": "ShipmentDeliveredEvent"
            }
          ]
        }
      }
    }
  },
  "components": {
    "messages": {
      "ShipmentDeliveredEvent": {
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
              "required": [
                "shipmentId",
                "orderId",
                "date"
              ],
              "type": "object",
              "description": "shipment model",
              "properties": {
                "shipmentId": {
                  "description": "The unique identifier of an shipment",
                  "type": "string",
                  "pattern": "^([A-Za-z0-9_-]{21})$",
                  "x-parser-schema-id": "shipmentId"
                },
                "date": {
                  "description": "Date of shipment submition.",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-1>"
                },
                "userId": {
                  "description": "The unique identifier of a user",
                  "type": "string",
                  "pattern": "^([A-Za-z0-9_-]{21})$",
                  "x-parser-schema-id": "orderId"
                }
              },
              "title": "Shipment",
              "x-parser-schema-id": "Shipment"
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
                "shipment.received.v1",
                "shipment.Confirmed.v1"
              ],
              "x-parser-schema-id": "EventType"
            }
          },
          "required": [
            "data"
          ],
          "x-parser-schema-id": "ShipmentDeliveredEvent"
        },
        "x-parser-message-name": "ShipmentDeliveredEvent"
      }
    },
    "schemas": {
      "shipmentId": {
        "description": "The unique identifier of an shipment",
        "type": "string",
        "pattern": "^([A-Za-z0-9_-]{21})$",
        "x-parser-schema-id": "shipmentId"
      },
      "orderId": {
        "description": "The unique identifier of a user",
        "type": "string",
        "pattern": "^([A-Za-z0-9_-]{21})$",
        "x-parser-schema-id": "orderId"
      },
      "Shipment": {
        "required": [
          "shipmentId",
          "orderId",
          "date"
        ],
        "type": "object",
        "description": "shipment model",
        "properties": {
          "shipmentId": {
            "description": "The unique identifier of an shipment",
            "type": "string",
            "pattern": "^([A-Za-z0-9_-]{21})$",
            "x-parser-schema-id": "shipmentId"
          },
          "date": {
            "description": "Date of shipment submition.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "userId": {
            "description": "The unique identifier of a user",
            "type": "string",
            "pattern": "^([A-Za-z0-9_-]{21})$",
            "x-parser-schema-id": "orderId"
          }
        },
        "title": "Shipment",
        "x-parser-schema-id": "Shipment"
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
          "shipment.received.v1",
          "shipment.Confirmed.v1"
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
      "ShipmentDeliveredEvent": {
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
            "required": [
              "shipmentId",
              "orderId",
              "date"
            ],
            "type": "object",
            "description": "shipment model",
            "properties": {
              "shipmentId": {
                "description": "The unique identifier of an shipment",
                "type": "string",
                "pattern": "^([A-Za-z0-9_-]{21})$",
                "x-parser-schema-id": "shipmentId"
              },
              "date": {
                "description": "Date of shipment submition.",
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "userId": {
                "description": "The unique identifier of a user",
                "type": "string",
                "pattern": "^([A-Za-z0-9_-]{21})$",
                "x-parser-schema-id": "orderId"
              }
            },
            "title": "Shipment",
            "x-parser-schema-id": "Shipment"
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
              "shipment.received.v1",
              "shipment.Confirmed.v1"
            ],
            "x-parser-schema-id": "EventType"
          }
        },
        "required": [
          "data"
        ],
        "x-parser-schema-id": "ShipmentDeliveredEvent"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 1
}