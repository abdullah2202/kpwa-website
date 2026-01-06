variable "name" { type = string }

variable "domain_name" {
  type        = string
  description = "e.g. dev.kpwa.co.uk"
}

variable "bucket_name" {
  type        = string
  description = "S3 bucket for site assets"
}

variable "price_class" {
  type    = string
  default = "PriceClass_100"
}

variable "tags" {
  type    = map(string)
  default = {}
}
