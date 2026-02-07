FROM node:20

WORKDIR /opt/server

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application source code into the working directory
COPY script.sh .
COPY server.js .

ENV MONGO=true \
    MONGO_URL="mongodb://mongodb:27017/catalogue"

CMD ["node", "server.js"]
