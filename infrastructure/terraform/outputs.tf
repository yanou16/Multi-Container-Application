output "vm_ip" {
  description = "Adresse IP publique de la VM"
  value       = google_compute_instance.todo_app_vm.network_interface[0].access_config[0].nat_ip
}