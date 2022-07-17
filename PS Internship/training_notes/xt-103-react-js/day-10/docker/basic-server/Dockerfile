FROM node:14

LABEL authors="Prashanth Puranik"

# Create app directory
WORKDIR /usr/src/app

ENV PORT=8080

EXPOSE ${PORT}

COPY ./package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "npm", "start" ]