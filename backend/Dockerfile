FROM node:21

WORKDIR /app

ENV PORT $PORT

COPY . .

RUN npm install

COPY . . 

EXPOSE 8080
CMD npm run start