# Approaches to dockerizing out web app
- Dockerizing: We create an image that will run our web app when the container runs
    - Copy onto an existing image (Node.js image for example) our web application source files and install dependencies and create a new image, and additionally make sure the web app starts when the container starts
    - We can attach a volume with the source code and dependencies onto a Node.js image for example and make sure npm start is called when container starts