provider "aws" {
  region = "ap-southeast-1"
}

# 1. Membuat VPC
resource "aws_vpc" "lks_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = { Name = "lks-kaltim-vpc" }
}

# 2. Public Subnet (Untuk Load Balancer/Web)
resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.lks_vpc.id
  cidr_block = "10.0.1.0/24"
  tags = { Name = "Public-Subnet" }
}

# 3. Private Subnet (Untuk Database/App)
resource "aws_subnet" "private" {
  vpc_id     = aws_vpc.lks_vpc.id
  cidr_block = "10.0.2.0/24"
  tags = { Name = "Private-Subnet" }
}
