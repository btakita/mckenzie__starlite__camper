export CWD=$(pwd)
cd $(dirname $0)/../..
./node_modules/.bin/vite build
node -e "import('./lib/index.js').then(({ Svg_Bumper__run })=>Svg_Bumper__run())" ./lib/index.js
