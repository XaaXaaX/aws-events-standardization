output "queue_arn" {
  value = aws_sqs_queue.queue.arn
}

output "queue_id" {
  value = aws_sqs_queue.queue.id
}
