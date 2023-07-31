---
name: OrderCreated
version: 0.0.1
summary: |
  Event represents when the order created by the seeker.
producers:
    - Order Service
consumers:
    - OrderPayment Service
    - Data Lake
owners:
    - memeberone
---

<NodeGraph title="Consumer / Producer Diagram" />