// using setTimeout to read data from file
var fs=require("fs");
fs.writeFile("tuv.txt", "Hello", function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("written");
    }
}
);

fs.appendFile("tuv.txt", "Hi", function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("appended");
    }
});

setTimeout(function() {
    fs.readFile("tuv.txt", "utf-8", function(readerr, data) {
        if(readerr) {
            console.log(readerr);
        }
        else {
            console.log(data);
        }
    })
}, 3000)