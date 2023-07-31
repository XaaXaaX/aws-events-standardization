

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
}

resource "aws_cloudwatch_log_group" "lambda_log_group" {
  name              = "/aws/lambda/${var.lambda_function_name}"
  retention_in_days = 7
}

