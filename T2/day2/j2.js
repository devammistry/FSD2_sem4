var express=require("express")
var app=express()
var p = require("path");

var staticp = p.join(__dirname, "../day2");
app.use(express.urlencoded())
app.use(express.static(staticp,{index:'index1.html'}))
app.post("/process", (req, res)=> {
    res.send(req.body.fname);
})
app.listen(5120);