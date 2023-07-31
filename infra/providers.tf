terraform {
  required_providers {
    aws = {
      version = "~> 5.7.0"
    }
  }

  required_version = ">= 1.2.0"

}

provider "aws" {
  region = var.defaultRegion
  profile = "cruel-leopard-dev"
  default_tags {
    tags = {
      costCenter     = var.costCenter
      application    = var.application
      environment    = var.environment
      owner          = var.team
      managed        = "terraform"
      taggingVersion = var.taggingVersion
    }
  }
}