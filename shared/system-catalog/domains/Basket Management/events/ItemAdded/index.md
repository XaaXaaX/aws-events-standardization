---
name: ItemAdded
version: 0.0.2
summary: |
  Event represents when an Item is added to the basket.
producers:
    - Basket Service
consumers:
    - Product Service
    - Data Lake
owners:
    - memeberone
badges:
    - content: New!
      backgroundColor: blue
      textColor: blue 
---

### Details

This event is triggered when a demand has been requested by the buyer, and the request validation process is passed correctly in Ingestion Service.

The validation process consiste of 3 following steps:
    - Contract Validation
    - Dedulication

<Mermaid />

<NodeGraph title="Consumer / Producer Diagram" />

<SchemaViewer />​

<Schema />