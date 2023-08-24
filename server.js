const express = require('express');

const app = express();

const PORT = 3000;

app.get('/' ,(req,res)=>{
    res.send('<h1>HomePage</h1>')
})

app.get('/greeting',(req,res) => {
    res.send('<h1>Welcome</h1>')
})

app.get('/greeting/:name', (req,res) => {
    res.send('Hello, ' + req.params.name)
})

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });

