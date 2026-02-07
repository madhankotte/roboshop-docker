FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application source code
COPY script.sh .
COPY server.js .

# Environment variables
ENV MONGO=true \
    MONGO_URL="mongodb://mongodb:27017/catalogue"

# Start the application
CMD ["node", "server.js"]
