FROM node:20
WORKDIR /opt/server
COPY package.json .
RUN npm install
COPY *.js .
ENV MONGO="true" \
    MONGO_URL="mongodb://mongodb:27017/catalogue"
CMD ["node", "index.js"]
