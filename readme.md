# 🐳 Docker Compose Todo API 
  
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)  
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)  
  
--- 
  
## 📌 Project Overview   
The goal of this project is to practice using Docker Compose to run a multi-container application in production.   
It uses Docker Compose to run a **Node.js application** and a **MongoDB database**.   
  <img width="1482" height="729" alt="image" src="https://github.com/user-attachments/assets/05185420-baf0-4eba-ad7a-1884b80f805b" />
<img width="1461" height="646" alt="image" src="https://github.com/user-attachments/assets/8ec3b797-9d57-4740-bcdf-fd75af1917d4" />

--- 
  https://roadmap.sh/projects/multi-container-service
## 📋 Requirements   
  
This project implements a simple unauthenticated Node.js API service for creating a todo list. 
  
### Endpoints 
- `GET /todos` — get all todos   
- `POST /todos` — create a new todo   
- `GET /todos/:id` — get a single todo by id   
- `PUT /todos/:id` — update a single todo by id   
- `DELETE /todos/:id` — delete a single todo by id   
  
The API connects to MongoDB to store the todo items.   
- Framework: **Express**   
- ODM: **Mongoose**   
- Dev tool: **Nodemon** for auto-restarts   
  
--- 
  
## 🏗️ Implementation   
  
### 📂 Project Structure   
  
```

<File before editing>
```markdown
# Docker Compose Todo API
## Project Overview
The goal of this project is to practice using Docker Compose to run a multi-container application in production. It uses Docker Compose to run a Node.js application and a MongoDB database.

## Requirements
This project implements a simple unauthenticated Node.js API service for creating a todo list. The API has the following endpoints:

- GET /todos — get all todos
- POST /todos — create a new todo
- GET /todos/:id — get a single todo by id
- PUT /todos/:id — update a single todo by id
- DELETE /todos/:id — delete a single todo by id
The API connects to MongoDB to store the todo items. It uses Express for the API and Mongoose to connect to MongoDB. Nodemon is used to automatically restart the server when the source code changes.

## Implementation
### Project Structure
```

<File before editing>
```markdown
# Docker Compose Todo API
## Project Overview
The goal of this project is to practice using Docker Compose to run a multi-container application in production. It uses Docker Compose to run a Node.js application and a MongoDB database.

## Requirements
This project implements a simple unauthenticated Node.js API service for creating a todo list. The API has the following endpoints:

- GET /todos — get all todos
- POST /todos — create a new todo
- GET /todos/:id — get a single todo by id
- PUT /todos/:id — update a single todo by id
- DELETE /todos/:id — delete a single todo by id
The API connects to MongoDB to store the todo items. It uses Express for the API and Mongoose to connect to MongoDB. Nodemon is used to automatically restart the server when the source code changes.

## Implementation
### Project Structure
```
├── docker-compose.yml
└── todo-api\
    ├── Dockerfile
    ├── models\
    │   └── Todo.js
    ├── package.json
    ├── public\
    │   ├── app.js
    │   ├── index.html
    │   └── style.css
    └── server.js
```
### Dockerization
The application is containerized using Docker:
 Dockerfile
The Dockerfile in the todo-api directory sets up a Node.js environment, installs dependencies, and configures the application to run on port 3000.
 Docker Compose
The docker-compose.yml file defines two services:

1. 1.
   api : Builds from the todo-api directory, maps port 3000, and connects to MongoDB
2. 2.
   mongo : Uses the official MongoDB image and persists data using a volume
### Features
- API Service : RESTful endpoints for CRUD operations on todo items
- Database : MongoDB for data persistence
- Frontend : Simple web interface for interacting with the API
- Data Persistence : MongoDB data is stored in a volume, ensuring it persists between container restarts
## How to Run
1. 1.
   Make sure Docker and Docker Compose are installed on your system
2. 2.
   Clone or download this repository
3. 3.
   Navigate to the project directory
4. 4.
   Run the following command:
```
docker-compose up --build
```
5. 1.
   Access the application at http://localhost:3000
## Development
The application uses volume mapping to enable live code changes without rebuilding the container. Any changes made to the source code will automatically trigger a server restart thanks to nodemon.

## Notes
- The API is unauthenticated for simplicity
- The MongoDB container is accessible on port 27017
- The API container is accessible on port 3000
- Data is persisted in a Docker volume named mongo-data

├── docker-compose.yml
├── infrastructure │   ├── ansible │   │   ├── inventory
│   │   ├── playbook.yml
│   │   ├── roles │   │   └── templates │   └── terraform │       ├── main.tf
│       ├── outputs.tf
│       └── variables.tf
└── todo-api ├── Dockerfile
├── models │   └── Todo.js
├── package.json
├── public │   ├── app.js
│   ├── index.html
│   └── style.css
└── server.js

```
### Dockerization
The application is containerized 
using Docker:
 Dockerfile
The Dockerfile in the todo-api 
directory sets up a Node.js 
environment, installs dependencies, 
and configures the application to run 
on port 3000.
 Docker Compose
The docker-compose.yml file defines 
two services:

1. 1.
   api : Builds from the todo-api 
   directory, maps port 3000, and 
   connects to MongoDB
2. 2.
   mongo : Uses the official MongoDB 
   image and persists data using a 
   volume
### Features
- API Service : RESTful endpoints for 
CRUD operations on todo items
- Database : MongoDB for data 
persistence
- Frontend : Simple web interface for 
interacting with the API
- Data Persistence : MongoDB data is 
stored in a volume, ensuring it 
persists between container restarts
## How to Run Locally
1. 1.
   Make sure Docker and Docker 
   Compose are installed on your 
   system
2. 2.
   Clone or download this repository
3. 3.
   Navigate to the project directory
4. 4.
   Run the following command:
```
docker-compose up --build

```
5. 1.
   Access the application at http://
   localhost:3000
   
## Remote Deployment with Terraform 
and Ansible on Google Cloud

### Infrastructure Setup with 
Terraform

The project includes Terraform 
configuration to provision a virtual 
machine on Google Cloud Platform:

1. Navigate to the `infrastructure/
terraform` directory
2. Configure your GCP credentials and 
project details
3. Initialize Terraform:
```
terraform init

```
4. Apply the Terraform configuration:
```
terraform apply

```

This creates:
- A VM instance on Google Cloud
- Firewall rules to allow HTTP 
traffic on port 3000
- SSH access to the VM

### Application Deployment with 
Ansible

After provisioning the infrastructure 
with Terraform, Ansible is used to 
configure the VM and deploy the 
application:

1. The Ansible inventory is 
automatically updated with the VM's 
IP address
2. Run the Ansible playbook:
```
cd ../ansible
ansible-playbook -i inventory playbook.yml

```

The Ansible playbook:
- Installs Docker on the VM
- Copies the application files to the 
VM
- Builds the Docker image for the API
- Creates a Docker network
- Runs the MongoDB container
- Runs the API container
- Configures the containers to 
restart automatically

### Accessing the Deployed Application

Once deployed, the application is 
accessible at:
```
http://<VM_IP_ADDRESS>:3000

```

The MongoDB data is persisted in a 
Docker volume named `mongodb_data` on 
the VM.

## Development
The application uses volume mapping 
to enable live code changes without 
rebuilding the container. Any changes 
made to the source code will 
automatically trigger a server 
restart thanks to nodemon.

## Notes
- The API is unauthenticated for 
simplicity
- The MongoDB container is accessible 
on port 27017
- The API container is accessible on 
port 3000
- Data is persisted in a Docker 

```

## 🚀 CI/CD Pipeline (GitHub Actions) 
  
The project uses GitHub Actions to automate deployment on every push to main. 
### 🔧 Workflow Overview 
  
- Trigger: Push to main  
- Runs on: Ubuntu VM  
- Steps:  
  - Checkout code  
  - Configure SSH  
  - Install Ansible  
  - Run playbook  
  
### 🔑 Required Secrets 
  
Set these secrets in GitHub → Settings > Secrets and variables > Actions: 
  
- SSH_PRIVATE_KEY → Private SSH key for server access  
- SSH_KNOWN_HOSTS → Server fingerprint (ssh-keyscan -H <server_ip>)  
- ANSIBLE_INVENTORY → Ansible inventory content  
  
### ✅ Deployment Flow 
  
- Push code → triggers pipeline  
- GitHub Actions connects to server  
- Ansible deploys updated app  
- Containers rebuild/restart if needed  
  
### 📈 Benefits of CI/CD 
  
- ⚡ Automation: No manual deploys  
- 🛡 Consistency: Same process every time  
- 🚀 Speed: Fast delivery to production  
- 📜 Traceability: Deployment history in GitHub  
  
### 🌐 Accessing the Deployed Application

Once deployed, the application is accessible at:
```
http://<VM_IP_ADDRESS>:3000
```

