variable "project_id" {
  description = "ID du projet Google Cloud"
  type        = string
}

variable "region" {
  description = "Région Google Cloud"
  type        = string
  default     = "europe-west1"
}

variable "zone" {
  description = "Zone Google Cloud"
  type        = string
  default     = "europe-west1-b"
}

variable "machine_type" {
  description = "Type de machine pour la VM"
  type        = string
  default     = "e2-small"
}

variable "ssh_user" {
  description = "Nom d'utilisateur SSH"
  type        = string
  default     = "debian"
}

variable "ssh_pub_key_path" {
  description = "Chemin vers la clé SSH publique"
  type        = string
  default     = "~/.ssh/id_rsa.pub"
}