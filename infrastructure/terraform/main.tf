# Configuration du provider Google Cloud
provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone
}

# Création d'une VM Compute Engine
resource "google_compute_instance" "todo_app_vm" {
  name         = "todo-app-vm"
  machine_type = var.machine_type
  zone         = var.zone

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
      size  = 20
    }
  }

  network_interface {
    network = "default"
    access_config {
      // Ephemeral public IP
    }
  }

  metadata = {
    ssh-keys = "${var.ssh_user}:${file(var.ssh_pub_key_path)}"
  }

  tags = ["http-server", "https-server"]

  # Permet à Ansible de se connecter à la VM une fois créée
  provisioner "local-exec" {
    command = "echo '${self.network_interface[0].access_config[0].nat_ip} ansible_user=${var.ssh_user}' > ../ansible/inventory"
  }
}

# Règle de pare-feu pour autoriser HTTP
resource "google_compute_firewall" "allow_http" {
  name    = "allow-http"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["80", "3000"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["http-server"]
}