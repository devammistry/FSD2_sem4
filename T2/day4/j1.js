// create a file which contains form which name, lname, pswd and submit button. once submitted, store all these entered values to /next page. Then redirect to /admin page & clear cookie for last name.
// Display remaining cookie on this page using post.

var express = require("express");
var app = express();
var p = require("path");

app.use(express.urlencoded())
app.use(express.static(p.join(__dirname, "../day4")))

var cp = require('cookie-parser');
app.use(cp());

app.post("/next", (req, res)=> {
    res.cookie("name", req.body.name);
    res.cookie("password", req.body.pwd);
    res.cookie("last_name", req.body.lname);
    res.redirect("/admin");
})
app.get("/admin",(req, res)=>{
    res.clearCookie('lname');
    res.write("This: "+req.cookies);
    res.write(" name of me : " + req.cookies.name);
    res.write(" Lname : " + req.cookies.lname);
    res.write(" Password : " + req.cookies.pwd);
    res.send()
});
app.listen(3296);