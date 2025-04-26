var express=require("express")
var app=express()
var p = require("path");

var staticp = p.join(__dirname, "../day2");
app.use(express.urlencoded());
app.use(express.static(staticp,{index:'index2.html'}))

app.post("/login",(req,res)=>{
    if( req.body.uname == 'admin' ) {
        res.write("<h1> Welcome " + req.body.uname + "</h1>")
    }
    else {
        res.write("Please login with admin name");
    }
    res.send();
})
app.listen(5222);