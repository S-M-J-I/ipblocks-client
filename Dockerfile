FROM nginx:latest

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy application files
COPY . /var/www/html

# Set the working directory
WORKDIR /var/www/html

# Expose port 80
EXPOSE 80 8001 9000 8080
# Optionally, install any additional PHP extensions
# RUN docker-php-ext-install mysqli pdo pdo_mysql

# Apache should start automatically due to the base image
