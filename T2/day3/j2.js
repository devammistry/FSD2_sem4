var express = require("express");
var app = express();
var p = require("path");

app.use(express.urlencoded())
app.use(express.static(p.join(__dirname, "../day3")))

app.post("/login",(req,res,next)=> {
        res.set("content-type","text/html");
        res.write("<h1>Welcome " + req.body.name + "</h1>");
        res.write("<h2>Your email id is " + req.body.email + "</h2>");
        
        if(req.body.subscribe == "on") {
            res.write("<h3>Thank you for your subscription</h3> <a href='/'>Logout</a>");
        } else {
            res.write("<h3>You can subscribe to get daily updates</h3> <a href='/subscribe'>Subscribe</a> <br> <a href='/'>Logout</a>");
        }
        res.send();
    }
);

app.get("/subscribe",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h3>Thank you for your subscription</h3> <a href='/'>Logout</a>");
    res.send();
});
app.listen(4836);