module "order_service" {
    source = "./order-created-event-producer"
    lambda_dist_dir = "../src/dist/event-producer"
    application = "event-standards"
    environment = "dev"
}

module "order_service" {
    source = "./order-deleted-event-producer"
    lambda_dist_dir = "../../../../../src/"
    application = "event-standards"
    environment = "dev"
}
