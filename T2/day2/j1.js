var express = require("express");
var app = express();
var p = require("path");

app.use(express.static(p.join(__dirname, "../day2")));
app.get("/calc", (req,res)=> {
    res.set("content-type","text/html");

    var n1 = parseFloat(req.query.n1);
    var n2 = parseFloat(req.query.n2);

    if ((n1>0) && (n2>0)) {
        if(req.query.formula == "addition") {
            res.write("<h1>Addition is : " + (n1+n2) + "</h1>");
        }
        else if(req.query.formula == "subtraction") {
            res.write("<h1>Subtraction is : " + (n1-n2) + "</h1>");
        }
        else if(req.query.formula == "multi") {
            res.write("<h1>Multiplication is : " + (n1*n2) + "</h1>");
        }
        else if(req.query.formula == "div") {
            res.write("<h1>Division is : " + (n1/n2) + "</h1>");
        }
        else {
            res.write("<h1>You have not selected any formula.</h1>");
        }
    } 
    else {
        res.write("<h1>Please enter the valid number/s.</h1>");
    }
    res.send()
    })
app.listen(7777);