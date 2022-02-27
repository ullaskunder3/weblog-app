const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/about.html'))
})
app.get('/contact', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/contact.html'))
})
app.get('/post', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/post.html'))
})
app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})