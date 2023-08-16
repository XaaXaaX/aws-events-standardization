module "order_service" {
    source = "./order-event-producers"
    lambda_dist_dir = "../src/dist/event-producer"
    application = "event-standards"
    environment = "dev"
}
