# Dockerfile
Set of instructions to create the image, and what to do when container starts

Dockerfile commands
- FROM - which image we are building this image from
- LABEL, MAINTAINER - author, email
- RUN - to run shell commands (the command runs when we create an image)
- COPY - to copy files from our computer to image
- ENTRYPOINT, CMD - To run some command (when the container starts)
- WORKDIR - sets the current working directory (where commands execute)
- EXPOSE - to make available a set of ports outside the container
- ENV - To set up environment variables
- VOLUME - To add a volume to a container that spins up

## Building docker image
docker build -t puranik3/basic-server .

## Running docker container
docker run -p 8081:8080 username/imagename

## Pushing image to Docker Hub
docker login
docker push username/imagename