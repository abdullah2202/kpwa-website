module "site" {
  source      = "../../modules/static-site"
  name        = "kpwa-prod"
  domain_name = var.domain_name
  bucket_name = var.bucket_name

  tags = {
    Project = "KPWA"
    Env     = "prod"
  }
}
