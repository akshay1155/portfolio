# Stage 1: Build the React Application
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package files to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies
# Using npm install as fallback if package-lock.json doesn't exist yet
RUN npm ci || npm install

# Copy the rest of the application files
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
