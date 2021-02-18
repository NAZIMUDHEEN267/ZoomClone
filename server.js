// modules 

const express = require('express');
const app = express();

//server

const server = require('http').Server(app)

app.set('view engine','ejs');

// root path 

app.get('/',(req,res)=>{
    res.render('room');
})






server.listen(3030);

