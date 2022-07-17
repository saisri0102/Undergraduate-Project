FROM node:14

# Create app directory
WORKDIR /usr/src/app

ENV PORT=10000
ENV NODE_ENV=development

EXPOSE ${PORT}

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]