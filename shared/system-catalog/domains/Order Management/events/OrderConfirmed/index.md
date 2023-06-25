---
name: OrderConfirmed
version: 0.0.1
summary: |
  Event represents when the seeker validates the order confirmation.
producers:
    - Order Service
consumers:
    - OrderPayment Service
    - Product Service
owners:
    - memeberone
---


<NodeGraph title="Consumer / Producer Diagram" />