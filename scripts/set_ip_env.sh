# Creates an Environment variable for the linking services
# Use "source" not "bash"
export REACT_APP_HOSTNAME=$(hostname -I | awk '{print $1}')
printenv | grep -i REACT_APP_HOSTNAME