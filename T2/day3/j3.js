var express = require('express');
var app = express();
var cp = require('cookie-parser');
app.use(cp());

app.get('/cookie', function(req, res){
    res.cookie('name', 'Express JS');
    res.cookie('fname', 'express'); //Sets fname = express
    res.cookie('lname', 'js'); //Sets lname = js
    res.cookie('ID','2',{ expires:new Date(Date.now()+10000)}); //expires after 10 secs
    res.cookie('email', 'express@gmail.com',{maxAge:2000}); //expires after 2 secs
    res.clearCookie('fname');
    //show the saved cookies
    const cookies = req.cookies;
    res.send(cookies); //Use req.cookies method to check the saved cookies
});
app.listen(3579);