output "dev_bucket" { value = module.site.bucket_name }
output "dev_cloudfront_id" { value = module.site.cloudfront_distribution_id }
output "dev_cloudfront_domain" { value = module.site.cloudfront_domain_name }
output "dev_acm_dns_validation_records" { value = module.site.acm_dns_validation_records }
