var express=require("express")
var app=express()
app.use(express.static(__dirname, {index:"form.html"}))
app.get("/process", (req, res)=> {
    var firstname=req.query.firstname
    var lastname=req.query.lastname
    res.send(firstname)
    res.send(lastname)
}
)
app.listen(1233)