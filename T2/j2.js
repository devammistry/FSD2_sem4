const express = require('express')
const app = express()
const path=require("path")
app.use(express.static(path.join(__dirname, "../frontend")))
app.listen(1111)