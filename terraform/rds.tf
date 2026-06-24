resource "aws_db_instance" "default" {
  allocated_storage    = 20
  engine               = "mysql"
  engine_version       = "8.0"
  instance_class       = "db.t3.micro"
  db_name              = "kaltim_db"
  username             = "admin"
  password             = "password123"
  skip_final_snapshot  = true
  publicly_accessible  = false
}