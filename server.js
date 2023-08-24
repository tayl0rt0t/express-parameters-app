const express = require('express');

const app = express();

const PORT = 3000;

const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


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

app.get('/magic/:question', (req,res) => {
    res.send(`${req.params.question}:` + `` + `<h1>` + answers[(Math.floor(Math.random() * answers.length+1))]+ `</h1>`)
} )

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });

