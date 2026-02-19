FROM node:20.19.5-alpine3.21 AS build
WORKDIR /opt/server
COPY package.json .
RUN npm install # this may add extra cache memory
COPY *.js .




FROM node:20.19.5-alpine3.21
# create a group ahd user
RUN addgroup -S roboshop && adduser -S roboshop -G roboshop
WORKDIR /opt/server
USER roboshop
COPY --from=build /opt/server /opt/server
ENV MONGO="true" \
    MONGO_URL="mongodb://mongodb:27017/catalogue"
RUN chown -R roboshop:roboshop /opt/server
USER roboshop
CMD ["node", "index.js"]


# FROM node:20
# WORKDIR /opt/server
# COPY package.json .
# RUN npm install
# COPY *.js .
# ENV MONGO="true" \
#     MONGO_URL="mongodb://mongodb:27017/catalogue"
# CMD ["node", "index.js"]
