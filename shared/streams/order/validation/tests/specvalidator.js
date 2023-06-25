const { validator } = require('../validator');

let body = {
    specVersion: "1",
    idempotencyKey: 'AAAAAAAAAAAAAAAAAAAAAAAA',
    scope: 'ordermanagement:order',
    eventType: 'INSERT',
    eventName: 'NOTIFICATION',
    contentType: 'JSON',
    ref: 'Event#/components/schemas/Event',
    metadata:{ }
};

Promise.resolve(
    validator.validate( body ))
    .then(() => console.log("Event respects the enterrise specification"))
    .catch( (error) => logErrors(error));


body = {
    specVersion: "1",
    idempotencyKey: 'AAAAAAAAAAAAAAAAAAAAAAAA',
    scope: 'ordermanagement:order',
    eventType: 'INSERT',
    eventName: 'NOTIFICATION',
    contentType: 'JSON',
    ref: 'OrderCreatedNotification#/components/schemas/OrderCreatedNotification',
    metadata: { 
        orderId: 'lj0OVlHFdHz9hHfgXUSoW',
        state: 'OrderCreated'
    }
};

Promise.resolve(
    validator.validate( body ))
    .then(() => console.log("Event respects the Order Notification Specifications"))
    .catch( (error) => logErrors(error));

function logErrors(error) {
    const msg = { Errors: JSON.parse(error.message) };
    console.log(msg);
}

