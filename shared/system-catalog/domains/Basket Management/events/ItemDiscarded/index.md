---
name: ItemDiscarded
version: 0.0.1
summary: |
  Event represents when an incomming Item is discarded due to a validation.
producers:
    - Basket Service
consumers:
    - Product Service
owners:
    - memeberone
---

<Admonition>When firing this event make sure you set the `correlation-id` in the headers. Our schemas have standard metadata make sure you read and follow it.</Admonition>

<NodeGraph title="Consumer / Producer Diagram" />