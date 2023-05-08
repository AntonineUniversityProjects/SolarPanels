FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

ENV PORT = 3000

EXPOSE 3000

CMD [ "npm" , "start" ]


