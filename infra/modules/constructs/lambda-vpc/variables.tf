variable "lambda_function_name" {
  type = string
}

variable "lambda_role_arn" {
  type = string
}

variable "lambda_handler" {
  type = string
}

variable "env_variables" {
  type        = map(string)
  description = "Environment variables injected into the lambda function"
}

variable "timeout" {
  type    = string
  default = 30
}

variable "memory_size" {
  type    = string
  default = 128
}

variable "runtime" {
    type   = string
}


variable "lambda_dist_dir" {
    type   = string
}


# variable "kinesis_firehose_arn" {
#   description = "Kinesis ARN for log stream"
#   type        = string
# }

# variable "loggroup_role_arn" {
#   description = "Role ARN for loggroup (should be able to write to kinesis firehose)"
#   type        = string
# }