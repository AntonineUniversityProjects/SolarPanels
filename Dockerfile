# Use an official Nginx runtime as a parent image
FROM nginx

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

