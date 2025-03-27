// write node script to check whether the extension is txt or not
var pm=require("path");
path=pm.parse("D:/LJ/ktm.txt");
if(path.ext==".txt") {
    console.log("passed");
}