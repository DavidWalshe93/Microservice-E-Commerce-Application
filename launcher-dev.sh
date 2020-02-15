# Get the root directory
CWD="$(pwd)"
echo "CWD set to $CWD"

cd "$CWD/cart"
echo "Starting cart microservice"
npm run dev &

cd "$CWD/catalogue"
echo "Starting catalogue microservice"
npm run dev &

cd "$CWD/users"
echo "Starting users microservice"
npm run dev &

cd "$CWD/front-end"
echo "Starting frontend microservice"
npm run dev &


