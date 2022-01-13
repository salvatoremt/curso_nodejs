const express = require("express");

require ("dotenv").config();

const app = express();

app.get ('/',function (req, res){
    res.send('hola salvatore');});

app.listen(process.env.PORT);

//localhost:3000
