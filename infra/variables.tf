variable "application" {
  description = "Application name"
  type        = string
  default     = "event-model-standards"
}

variable "environment" {
  description = "The environment of the application"
  type        = string
  default     = "dev"
}

variable "costCenter" {
  description = "cost center of workloads"
  type        = string
  default     = "xaaxaax"
}

variable "team" {
  description = "team name"
  type        = string
  default     = "event-design"
}

variable "defaultRegion" {
  description = "default region"
  type        = string
  default     = "eu-west-1"
}

