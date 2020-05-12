# Author: David Walshe
# Date: 12/05/2020

# Get the root directory
CWD="$(pwd)"
echo "CWD set to $CWD"

# ===============================
# Spin up all service containers.
# ===============================

echo "====================================================="
cd "$CWD/cart_service" || exit
echo "Starting cart microservice..."
docker run -d --name cart_service cart
echo "====================================================="

echo "====================================================="
cd "$CWD/catalogue_service" || exit
echo "Starting catalogue microservice..."
docker run -d --name catalog_service catalog_service
echo "====================================================="

echo "====================================================="
cd "$CWD/users_service" || exit
echo "Starting users microservice..."
docker run -d --name user_service user_service
echo "====================================================="

echo "====================================================="
cd "$CWD/front_end_service" || exit
echo "Starting frontend microservice..."
docker run -d -p 8079:8079 --name frontend_service frontend_service
echo "====================================================="

echo "====================================================="
cd "$CWD/order_service" || exit
echo "Starting orders microservice..."
docker run -d --name order_service order_service
echo "====================================================="

# Return to start dir
cd "$CWD" || exit


