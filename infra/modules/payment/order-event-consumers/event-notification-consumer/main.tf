module "incoming_queue" {
  source = "../constructs/queue-with-dlq"
  name = "${var.application}-${var.environment}-notification-incomming-queue"
  retry_count = 3
}

module "streaming_subscription" {
  source = "../constructs/sns-sqs-subscription"
  source_sns_topic_arn = var.producer_streaming_topic_arn
  target_queue_arn = module.incoming_queue.queue_arn
  target_queue_id = module.incoming_queue.queue_id
  filter_policy_scope = "MessageBody"
  filter_policy = jsonencode({
    category: [ "NOTIFICATION" ]
  })
}

module "storage_table" {
  source = "./storage"
  application = var.application
  environment = var.environment   
}

resource "aws_iam_role" "lambda_role" {
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_policy" "iam_policy_for_lambda" {
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = ["arn:aws:logs:*:*:*"]
      },
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:GetItem"
        ]
        Resource = ["${module.storage_table.table_arn}"]
      },
      {
        Effect = "Allow"
        Action = [
          "sqs:ReceiveMessage",
          "sqs:DeleteMessage",
          "sqs:GetQueueAttributes"
        ]
        Resource = ["${module.incoming_queue.queue_arn}"]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_iam_policy_to_iam_role" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.iam_policy_for_lambda.arn
}

module "consumer_process_integration_event_lambda" {
  source               = "../constructs/lambda"
  lambda_handler       = "index.handler"
  lambda_function_name = "${var.application}-${var.environment}-processs-notification-events"
  lambda_dist_dir      = var.lambda_dist_dir
  runtime              = "nodejs18.x"
  lambda_role_arn      = aws_iam_role.lambda_role.arn
  memory_size          = "512"
  env_variables = {
    "TABLE_NAME": module.storage_table.table_name
  }
}

resource "aws_lambda_event_source_mapping" "incoming_event_source" {
  event_source_arn = module.incoming_queue.queue_arn
  function_name    = module.consumer_process_integration_event_lambda.function_name
}

