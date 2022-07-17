# Volumes
- A folder with data / files
- A volume can be shared across multiple containers
- A container can have multiple volumes
- Files on the mounted volume are readable / writable by the container


docker run -v /var/www node

docker inspect <container id>