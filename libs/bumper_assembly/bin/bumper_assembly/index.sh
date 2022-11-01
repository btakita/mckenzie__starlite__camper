export CWD=$(pwd)
DIR=$(dirname $0)
cd $DIR/../..
./node_modules/.bin/vite build
cd $DIR
node ./index.js "$@"
