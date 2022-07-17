# Core concepts in Docker

## Image
- Like a CD with OS installation files
- Filesystem - layered filesystem
- Read-only filesystem
- a template for a container
    - image for spinning up a program source code that sits on your computer

## Container
- like a running OS
- image provides the blueprint for spinning up a container
- you can do whatever you can do with an OS, on a container
    - you can create files
    - you can run an application
- a running instance of an image
    - VM / program in memory that is executing (process) / object in OOPs
- you can create as many containers as you wish from a single image
- Can be started, stopped, restarted etc.
    - just like restarting computer
    - happens very very fast - because it very lightweight
