import express from 'express';
import bodyParser from 'body-parser';
import fs from 'node:fs/promises';
import poolPromise from './database.js'

const app = express();
    

app.use(bodyParser.urlencoded({extended: false}));

// CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
  });

app.get('/habits', async(req, res) => {
    
    poolPromise.execute('SELECT * FROM habits')
    .then( result => {
        console.log(result[0], result[1]);
        res.status(200).json({habits: result[0]});

    })
    .catch(err => {
        console.log(err);
    });
    
})

app.use('/add', (req, res, next) => {
    res.send('<form action = "/habit" method="POST"><input type="text" name ="title"><button type = "submit">Add Habit</button></form>');
});

app.use('/habit', (req, res, next)=> {
    console.log(req.body);
    fs.writeFile('./message.json', JSON.stringify(req.body));
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});



app.listen(3000);