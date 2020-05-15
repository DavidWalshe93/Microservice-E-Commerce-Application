# Author: David Walshe
# Date: 14/05/2020 

# Base image to use.
FROM mysql:5.7

# # Copy in required files.
# COPY ./sql_scripts/ ./docker-entrypoint-initdb.d/

# # Start MYSQL and populate the database if it doesnt already
# # exist
# RUN /bin/bash -c "/usr/bin/mysqld_safe --skip-grant-tables &" && \
#     sleep 5 && \
#     mysql -u root -e "CREATE DATABASE IF NOT EXISTS shop" && \
#     mysql -u root shop < init.sql

CMD ["mysqld"]