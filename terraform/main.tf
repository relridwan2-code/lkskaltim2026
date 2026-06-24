provider "aws" {
  region = "ap-southeast-1"
}

resource "aws_vpc" "lks_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = { Name = "lks-kaltim-vpc" }
}