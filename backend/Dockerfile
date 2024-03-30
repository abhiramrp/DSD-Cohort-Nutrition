FROM node:21

WORKDIR /app

ENV PORT $PORT

COPY . .

RUN npm install

COPY . . 

EXPOSE 3000
CMD npm run dev