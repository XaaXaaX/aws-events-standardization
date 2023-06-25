var kafka = require('kafka-node'),
  Consumer = kafka.Consumer,
  client = new kafka.KafkaClient(),
  consumer = new Consumer(
    client,
    [
      { topic: 't', partition: 0 },
      { topic: 'OrderCreated', partition: 1 },
    ],
    {
      autoCommit: false,
    }
  );

consumer.on('message', function (message) {
  console.log(message);
});
