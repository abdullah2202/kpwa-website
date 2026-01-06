data "aws_caller_identity" "current" {}

resource "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]

  # GitHub OIDC thumbprint commonly used; AWS accepts this provider config.
  # If you prefer, you can manage thumbprints differently; this works in practice.
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

locals {
  repo_full = "${var.github_org}/${var.github_repo}"
}

# ---- Trust policy helper (restrict by repo + branch) ----
data "aws_iam_policy_document" "assume_dev" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${local.repo_full}:ref:refs/heads/dev"]
    }
  }
}

data "aws_iam_policy_document" "assume_prod" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${local.repo_full}:ref:refs/heads/main"]
    }
  }
}

# ---- DEV deploy role ----
resource "aws_iam_role" "deploy_dev" {
  name               = "kpwa-gha-deploy-dev"
  assume_role_policy = data.aws_iam_policy_document.assume_dev.json
}

data "aws_iam_policy_document" "deploy_dev_policy" {
  statement {
    actions   = ["s3:ListBucket"]
    resources = ["arn:aws:s3:::${var.dev_bucket_name}"]
  }
  statement {
    actions = ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"]
    resources = ["arn:aws:s3:::${var.dev_bucket_name}/*"]
  }
  statement {
    actions   = ["cloudfront:CreateInvalidation"]
    resources = ["*"]
    condition {
      test     = "StringEquals"
      variable = "cloudfront:DistributionId"
      values   = [var.dev_cloudfront_distribution_id]
    }
  }
}

resource "aws_iam_policy" "deploy_dev" {
  name   = "kpwa-gha-deploy-dev-policy"
  policy = data.aws_iam_policy_document.deploy_dev_policy.json
}

resource "aws_iam_role_policy_attachment" "deploy_dev" {
  role       = aws_iam_role.deploy_dev.name
  policy_arn  = aws_iam_policy.deploy_dev.arn
}

# ---- PROD deploy role ----
resource "aws_iam_role" "deploy_prod" {
  name               = "kpwa-gha-deploy-prod"
  assume_role_policy = data.aws_iam_policy_document.assume_prod.json
}

data "aws_iam_policy_document" "deploy_prod_policy" {
  statement {
    actions   = ["s3:ListBucket"]
    resources = ["arn:aws:s3:::${var.prod_bucket_name}"]
  }
  statement {
    actions = ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"]
    resources = ["arn:aws:s3:::${var.prod_bucket_name}/*"]
  }
  statement {
    actions   = ["cloudfront:CreateInvalidation"]
    resources = ["*"]
    condition {
      test     = "StringEquals"
      variable = "cloudfront:DistributionId"
      values   = [var.prod_cloudfront_distribution_id]
    }
  }
}

resource "aws_iam_policy" "deploy_prod" {
  name   = "kpwa-gha-deploy-prod-policy"
  policy = data.aws_iam_policy_document.deploy_prod_policy.json
}

resource "aws_iam_role_policy_attachment" "deploy_prod" {
  role      = aws_iam_role.deploy_prod.name
  policy_arn = aws_iam_policy.deploy_prod.arn
}
