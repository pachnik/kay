const port = 8000;
const express = require("express");
const app = express();


app.use(express.static('www'));

app.get('/Ello', (dotaz, odpoved) => {
    odpoved.send('Ello');
});

app.use('/', (req, res) => {

    res.send(`
    <!DOCTYPE html>
    <head>
        <title>Dump it</title>
    </head>
    <body>
        <a href="/soubor.html" alt="lol">kys</a>
        <a href="/Ello" alt="lol">sick</a>
    </body>
    `);
    
});

app.listen(port, 'localhost', () => {
    console.log('running');  
});

