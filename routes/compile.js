const {exec} = require("child_process")
const fs = require("fs")
const getName = require("./utils/generate-fileName.js");
const write = require("./utils/write.js");

var langExtension = [".c",".cpp",".py",".js",".java"];
compile = (req, res) => {
    console.log(req.query)
    if(req.query.code == null){
        res.send("Nothing to Execute");
    }else{
        var fileName  = getName();
        if(req.query.lang==1){
            fileName += langExtension[1];
            let compilePath = await write(fileName,"cpp",req.query.code);
        }/*
         exec(req.query.code, (error, stdout, stderr) => {
             if(error){
                res.send(error.message);
            }else if(stderr){
                res.send(stderr);
            }
            res.send(stdout)
         })*/
    }
};

module.exports = compile;
