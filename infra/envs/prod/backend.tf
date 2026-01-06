terraform {
  backend "s3" {
    bucket         = "kpwa-terraform-state-22288"
    key            = "kpwa/prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "kpwa-terraform-locks"
    encrypt        = true
  }
}
