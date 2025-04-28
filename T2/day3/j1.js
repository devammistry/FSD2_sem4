var express=require("express")
var app=express()
// app.use("/", (req, res)=>{
//     res.write("DM");
//     res.send();
// })
app.use("/xyz", (req, res, next)=> {
        console.log(new Date());
        next();
    }, (req, res, next) => {
        res.set("content-type","text/html")
        res.write("Hello");
        next();
    }, (req, res) => {
        res.write(`<div>
        <h2>Welcome to LJU</h2>
        <h5>Tutorial on Middleware</h5>
        </div>`);
        res.send();
    }
);
app.listen(6001)