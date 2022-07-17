# Docker Compose
- A tool for managing a set of containers (services) that works together in your application
- Build images, start and stop multiple services in one go
- Get logs of all running services
- docker-compose.yml
    - Set of instructions
        - to build images
        - to launch containers
            - configure networks the container is to be added to
            - volumes to add
            - port to expose
- Three steps when using docker-compose (run from project folder which has docker-compose.yml file)
    - Build images
        - docker-compose build
    - Launch containers (start all containers of the application)
        - docker-compose up
    - Tear down containers (stop and delete all containers of the application)
        - docker-compose down
    - To list all containers of your application
        - docker-compose ps

__Note__: Check workshops-app-express in this folder for implementation of docker-compose.yml for an app