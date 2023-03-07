# Use the official Node.js 18 image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Set the environment variable for production mode
# ENV NODE_ENV production

# Expose port 8080 for the web server
EXPOSE 8080

# Start the web server
CMD [ "npm", "start" ]
