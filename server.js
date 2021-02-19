// modules 

const express = require('express');
const app = express();
//uuid (uuid is use for unique id for rooms)
const { v4: uuidv4 } = require('uuid');
//server
const server = require('http').Server(app)


// specifying what engine using

app.set('view engine','ejs');
app.use(express.static('public'));



// root path 

app.get('/',(req,res)=>{
    res.redirect(`/${uuidv4()}`);
})

//room path
app.get('/room',(req,res)=>{
    res.render('room',{ roomId: req.params.room })
})




server.listen(3030);

