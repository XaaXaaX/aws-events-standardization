resource "aws_dynamodb_table" "consumer_table" {
  name         = "${var.application}-${var.environment}-storage-table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "orderId"
  range_key    = "type"

  attribute {
    name = "orderId"
    type = "S"
  }

  attribute {
    name = "type"
    type = "S"
  }
}