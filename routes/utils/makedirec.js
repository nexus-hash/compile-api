var fs = require("fs");
var os = require("os");
var path = require("path");

const home = os.homedir();

const tmppath = path.join(home,"servers/tmp");

function makeDir(langPath){
    console.log(langPath);
    if(!fs.existsSync(langPath)){
        try{
            fs.mkdirSync(langPath);
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = {tmppath,makeDir};