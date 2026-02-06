FROM node:20
WORKDIR /opt/server
COPY  psck.json .
RUN npm install
COPY *.js .
ENV MONGO="trur" \
    MONGO_URL="mongodb://mongodb:27017/catalogue"
CMD [ "node", "server.js" ]