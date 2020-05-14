# Author: David Walshe
# Date: 12/05/2020

# Image
FROM node:12.16

# Setup Dockerfile Build Arguments
ARG port
ARG user_service_dest
ARG user_service_port
ARG catalog_service_dest
ARG catalog_service_port
ARG cart_service_dest
ARG cart_service_port
ARG order_service_dest
ARG order_service_port

# Setup Environment Variables for Application
ENV PORT=${port}
ENV USER_SERVICE_DEST=${user_service_dest}
ENV USER_SERVICE_PORT=${user_service_port}
ENV CATALOG_SERVICE_DEST=${catalog_service_dest}
ENV CATALOG_SERVICE_PORT=${catalog_service_port}
ENV CART_SERVICE_DEST=${cart_service_dest}
ENV CART_SERVICE_PORT=${cart_service_port}
ENV ORDER_SERVICE_DEST=${order_service_dest}
ENV ORDER_SERVICE_PORT=${order_service_port}

# Port available to other containers inside Docker Private Network, NOT HOST.
EXPOSE ${port}

#-----------------------------------------------------------------------------------------------------------------------
# REACT
#-----------------------------------------------------------------------------------------------------------------------

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
COPY . .

# Copy the react app source code for the Front-end to render.
RUN mv ./react/build ./service/public

# Run command for container on start-up
CMD ["npm", "run", "start"]