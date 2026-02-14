FROM node:20
WORKDIR /opt/server
EXPOSE 8080
COPY package.json .
RUN npm install
COPY *.js .
ENV REDIS_HOST="redis" \
    CATALOGUE_HOST="catalogue" \
    CATALOGUE_PORT="8080" \
    MONGO_URL="mongodb://mongodb:27017/cart"
CMD ["node", "server.js"]
