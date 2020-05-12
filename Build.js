if (process.argv.length > 2)
{
    console.log(process.argv);
}

const {execSync} = require("child_process");

execSync(`/Applications/CocosCreator.app/Contents/MacOS/CocosCreator --path ./ --build "platform=web-mobile;debug=false"`, { stdio: 'inherit' });