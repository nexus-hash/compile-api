const ip = require("ip");

function getName(){
    var ipinfo = ip.address();
    var time = new Date().getTime();
    var x="";
    for(let char of ipinfo.toString()){
        if(char === "."){
            continue;
        }else{
            x+=char;
        }
    }
    var fileName = x + time.toString();
    return fileName;
}

module.exports = getName;