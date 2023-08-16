module "incoming_queue" {
    source = "../constructs/queue-with-dlq"
    name = "${var.application}-${var.environment}-producer-incomming-queue"
    retry_count = 3
}

resource "aws_sns_topic" "stream_topic" {
    name = "${var.application}-${var.environment}-producer-streaming-topic"
}

resource "aws_iam_role" "events_producer_lambda_role" {
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

resource "aws_iam_policy" "events_producer_lambda_iam_policy" {
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
          "sqs:ReceiveMessage",
          "sqs:DeleteMessage",
          "sqs:GetQueueAttributes"
        ]
        Resource = ["${module.incoming_queue.queue_arn}"]
      },
      {
        Effect = "Allow"
        Action = [
          "sns:Publish"
        ]
        Resource = ["${aws_sns_topic.stream_topic.arn}"]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "events_producer_policy_to_role_attachment" {
  role       = aws_iam_role.events_producer_lambda_role.name
  policy_arn = aws_iam_policy.events_producer_lambda_iam_policy.arn
}

module "event_producer_lambda" {
    source = "../constructs/lambda"
    lambda_function_name = "${var.application}-${var.environment}-event-producer-handler"
    lambda_handler = "index.handler"
    lambda_role_arn = aws_iam_role.events_producer_lambda_role.arn
    lambda_dist_dir      = var.lambda_dist_dir
    runtime = "nodejs18.x"
    timeout = 5
    memory_size = "512"
    env_variables = { 
        "TOPIC_ARN": aws_sns_topic.stream_topic.arn
    }
}

resource "aws_lambda_event_source_mapping" "incoming_event_source" {
  event_source_arn = module.incoming_queue.queue_arn
  function_name    = module.event_producer_lambda.function_name
}
