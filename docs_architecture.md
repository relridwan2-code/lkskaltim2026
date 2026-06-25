# Dokumentasi Arsitektur

## Ringkasan
Sistem ini dirancang dengan pendekatan *3-tier architecture* untuk memastikan keamanan, skalabilitas, dan ketersediaan tinggi.

## Komponen Utama
1. **Networking**: VPC dengan pemisahan Public Subnet (untuk Load Balancer) dan Private Subnet (untuk aplikasi dan database).
2. **Compute**: Aplikasi dijalankan menggunakan Docker di dalam EC2 Instance untuk menjaga konsistensi *environment*.
3. **Database**: Menggunakan AWS RDS yang ditempatkan di Private Subnet demi keamanan data.
4. **IaC**: Seluruh infrastruktur didefinisikan menggunakan Terraform untuk memudahkan replikasi dan manajemen.
