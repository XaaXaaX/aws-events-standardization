module "event_producer" {
    source = "./modules/event-producer"
    lambda_dist_dir = "../src/dist/event-producer"
    application = "event-standards"
    environment = "dev"
}

module "integration_event_consumer" {
    source = "./modules/event-integration-consumer"
    lambda_dist_dir = "../src/dist/event-integration-consumer"
    application = "event-standards"
    environment = "dev"
    producer_streaming_topic_arn = module.event_producer.producer_stream_topic_arn
}

module "notification_event_consumer" {
    source = "./modules/event-notification-consumer"
    lambda_dist_dir = "../src/dist/event-notification-consumer"
    application = "event-standards"
    environment = "dev"
    producer_streaming_topic_arn = module.event_producer.producer_stream_topic_arn
}

module "validation_event_consumer" {
    source = "./modules/event-validation-consumer"
    lambda_dist_dir = "../src/dist/event-validation-consumer"
    application = "event-standards"
    environment = "dev"
    producer_streaming_topic_arn = module.event_producer.producer_stream_topic_arn
}