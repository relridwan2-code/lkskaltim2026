resource "aws_db_instance" "default" {
  allocated_storage    = 20
  engine               = "mysql"
  instance_class       = "db.t3.micro"
  username             = "admin"
  password             = "password123" # Ingat: di dunia nyata gunakan Secrets Manager
  db_subnet_group_name = "default"
  skip_final_snapshot  = true
}
