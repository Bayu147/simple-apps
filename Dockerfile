FROM node:24.2.0
WORKDIR /app
ADD . /app
RUN npm install
CMD npm start
EXPOSE 3000