FROM node:latest

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait

RUN chmod +x /wait && npm install -g nodemon && npm install -g yarn --force

WORKDIR C:\Users\kvart\Documents\smoked\back

COPY package.json C:\Users\kvart\Documents\smoked\back

RUN yarn

ENV PORT=3001
ENV HOST=localhost
ENV MONGO_PORT=27017
ENV MONGO_HOST=mongodb
ENV DB_NAME=smoked

EXPOSE 3001