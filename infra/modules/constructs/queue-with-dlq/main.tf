resource "aws_sqs_queue" "dlq" {
  name = "${var.name}-dlq"
}


resource "aws_sqs_queue" "queue" {
  name = var.name
  visibility_timeout_seconds = 15
  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.dlq.arn
    maxReceiveCount     = var.retry_count
  })

}

resource "aws_sqs_queue_redrive_allow_policy" "dlq_redrive_policy" {
  queue_url = aws_sqs_queue.dlq.id

  redrive_allow_policy = jsonencode({
    redrivePermission = "byQueue",
    sourceQueueArns   = [aws_sqs_queue.queue.arn]
  })
}
