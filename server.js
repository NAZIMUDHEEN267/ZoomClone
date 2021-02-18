// modules 

const express = require('express');
const app = express();

//server

const server = require('http').Server(app)


// root path 

app.get('/',(req,res)=>{
    res.status(200).send('hello my name is nazim')
})






server.listen(3030);

