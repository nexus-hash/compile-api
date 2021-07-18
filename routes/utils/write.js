var fs = require("fs")
var path = require("path");
var {tmppath,makeDir} = require("./makedirec")


function write(fileName,lang,source){
    var filePath = path.join(tmppath,lang);
    makeDir(filePath);
    return new Promise((resolve,reject)=>{fs.writeFile(path.join(filePath,fileName),source,function(err){
        if(err) {reject(err);}
        else {resolve(path.join(filePath, fileName));}
    })});
}

module.exports = write;