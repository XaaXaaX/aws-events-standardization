resource "aws_security_group" "lambda_vpc_sg" {
  name        = lower("${var.lambda_function_name}-vpc-sg")
  description = "${var.lambda_function_name} server access security group"
  vpc_id      = var.vpc_id
}

resource "aws_security_group_rule" "allow_https" {
 type              = "egress"
 description       = "HTTPS egress"
 from_port         = 443
 to_port           = 443
 protocol          = "tcp"
 cidr_blocks       = ["0.0.0.0/0"]
 security_group_id = aws_security_group.lambda_vpc_sg.id
}




data "archive_file" "zip_the_lambda_code" {
  type        = "zip"
  source_dir  = var.lambda_dist_dir
  output_path = "${var.lambda_dist_dir}-${var.lambda_function_name}.zip"
}

resource "aws_lambda_function" "lambda_function" {
  function_name    = var.lambda_function_name
  filename         = data.archive_file.zip_the_lambda_code.output_path
  role             = var.lambda_role_arn
  handler          = var.lambda_handler
  source_code_hash = filebase64sha256("${data.archive_file.zip_the_lambda_code.output_path}")
  runtime          = var.runtime
  memory_size      = var.memory_size

  environment {
    variables = var.env_variables
  }


  vpc_config {
    subnet_ids         = [var.vpc_subnet_1, var.vpc_subnet_2, var.vpc_subnet_3]
    security_group_ids = [aws_security_group.lambda_vpc_sg.id]
  }

}

resource "aws_cloudwatch_log_group" "lambda_log_group" {
  name              = "/aws/lambda/${var.lambda_function_name}"
  retention_in_days = 7
}

# resource "aws_cloudwatch_log_subscription_filter" "log_forward" {
#   name            = "${var.lambda_function_name}-log-forwarder"
#   role_arn        = var.loggroup_role_arn
#   log_group_name  = "/aws/lambda/${var.lambda_function_name}"
#   filter_pattern  = ""
#   destination_arn = var.kinesis_firehose_arn
#   depends_on = [
#     aws_cloudwatch_log_group.lambda_log_group
#   ]
# }
