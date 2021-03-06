# Author: David Walshe
# Date: 12/05/2020

# Image
FROM node:12.16

# Setup Dockerfile Build Arguments
ARG hostname=http://localhost
ARG port=8079
ARG user_service_port=3001
ARG catalog_service_port=3002
ARG cart_service_port=3003
ARG order_service_port=3004

# Setup Environment Variables for Application
ENV PORT=${port}
ENV REACT_APP_HOSTNAME=${hostname}
ENV REACT_APP_USER_SERVICE_PORT=${user_service_port}
ENV REACT_APP_CATALOG_SERVICE_PORT=${catalog_service_port}
ENV REACT_APP_CART_SERVICE_PORT=${cart_service_port}
ENV REACT_APP_ORDER_SERVICE_PORT=${order_service_port}

# Port available to other containers inside Docker Private Network, NOT HOST.
EXPOSE ${port}

#-----------------------------------------------------------------------------------------------------------------------
# FRONT-END
#-----------------------------------------------------------------------------------------------------------------------

# App run directory
WORKDIR /usr/src/app

# Copy over dependencies
COPY ./service/package.json package.json

# Run npm install to build application dependencies
RUN npm install && npm cache clean --force

# Copy application code to Container
COPY ./service .

#-----------------------------------------------------------------------------------------------------------------------
# REACT
#-----------------------------------------------------------------------------------------------------------------------
# React is done second as changes here are more common and require more rebuilds.

# Make the react app the current work directory
WORKDIR /usr/src/react

# Copy in the react app package.json
COPY ./react/package.json package.json

# Run npm install to build application dependencies
RUN npm install && npm cache clean --force

# Copy in the react app source code.
COPY ./react/ .

# Run the react app's build command to create production app from src.
RUN npm run build

# Copy the react app source code for the Front-end to render.
RUN mv ./build ./../app/public


#-----------------------------------------------------------------------------------------------------------------------
# RUN APP
#-----------------------------------------------------------------------------------------------------------------------

# App run directory
WORKDIR /usr/src/app

# Run command for container on start-up
CMD ["npm", "run", "start"]