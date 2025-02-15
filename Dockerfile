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

# Optionally, install any additional PHP extensions
# RUN docker-php-ext-install mysqli pdo pdo_mysql

# RUN wget https://raw.githubusercontent.com/composer/getcomposer.org/f3108f64b4e1c1ce6eb462b159956461592b3e3e/web/installer -O - -q | php -- --quiet

# FROM composer

# # RUN composer init
# # RUN composer install

# # RUN ls -l


# RUN composer require web3p/web3.php dev-master
# COPY composer.json composer.lock /var/www/html/

# EXPOSE 80 8001 9000 8080