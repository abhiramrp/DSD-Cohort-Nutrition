FROM node:21

WORKDIR /app

ENV PORT $PORT

COPY . .

RUN npm install

COPY . . 

RUN npm run build
RUN npm run start

EXPOSE 3000
CMD [ "node", "dist/index.js" ]