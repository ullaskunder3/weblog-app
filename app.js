const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.use('/public/img',express.static('./public/img'));
app.use('/public/svgs',express.static('./public/svgs'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/about', (req, res)=>{
    res.render('about');
})
app.get('/login', (req, res)=>{
    res.render('login')
})
app.get('/post', (req, res)=>{
    res.render('post')
})
app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})