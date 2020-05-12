const {execSync} = require("child_process");

execSync(`/Applications/CocosCreator.app/Contents/MacOS/CocosCreator --path ./ --build "platform=web-mobile;debug=false"`, { stdio: 'inherit' });