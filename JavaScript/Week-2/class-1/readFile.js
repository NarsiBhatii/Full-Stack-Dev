function onDone(){
    console.log("hi there");
}

const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data) {
    console.log(data)
})
