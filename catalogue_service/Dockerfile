# Author: David Walshe
# Date: 12/05/2020

# Image
FROM node:12.16

# Setup Dockerfile Build Arguments
ARG port=3002
ARG sql_username=root
ARG spl_password=mypass
ARG sql_database=shop
ARG sql_logger=false

# Port available to other containers inside Docker Private Network, NOT HOST.
EXPOSE ${port}

# App run directory
WORKDIR /usr/src/app

# Copy over dependencies
COPY package.json package.json

# Run npm install to build application dependencies
RUN npm install && npm cache clean --force

# Copy application code to Container
COPY . .

# Setup Environment Variables for Application
ENV PORT=${port}
ENV SQL_USERNAME=${sql_username}
ENV SQL_PASSWORD=${sql_password}
ENV SQL_DATABASE=${sql_database}
ENV SQL_LOGGER=${sql_logger}

# Run command for container on start-up
CMD ["npm", "run", "dev"]