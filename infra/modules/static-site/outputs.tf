output "bucket_name" { value = aws_s3_bucket.site.bucket }

output "cloudfront_distribution_id" { value = aws_cloudfront_distribution.cdn.id }
output "cloudfront_domain_name"     { value = aws_cloudfront_distribution.cdn.domain_name }

output "acm_certificate_arn" { value = aws_acm_certificate.cert.arn }

# DNS validation records you will add to one.com
output "acm_dns_validation_records" {
  value = [
    for dvo in aws_acm_certificate.cert.domain_validation_options : {
      domain  = dvo.domain_name
      name    = dvo.resource_record_name
      type    = dvo.resource_record_type
      record  = dvo.resource_record_value
    }
  ]
}
