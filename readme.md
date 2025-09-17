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