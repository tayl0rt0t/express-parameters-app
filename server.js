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

app.get('/tip/:t1/:t2', (req,res)=>{
    res.send('Tip: ' + req.params.t1 * req.params.t2 / 100)
})



app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });

