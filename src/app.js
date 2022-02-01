
   
const model = require('./model');

const express = require('express');
const app = express();

app.use(express.static('www'));


app.get('/Ello', (req, res) => {
    res.send('Elllo!');
});

app.use('/soubor', express.static('www/soubor.html'));

app.get('/about', (req, res) => {
    res.send('Tuto stránku jsem vytvořil já.');
});

app.get('/json', (req, res) => {
    res.json({'krestni': 'x', 'prijmeni': 'd'});
});

app.get('/lide', (req, res) => {
    res.json(model.nactiVsechnyLidi());
});

app.get('/clovek/:id', (req, res) => {
    let id = req.params.id;
    let clovek = model.nactiCloveka(id);

    if(clovek) {
        res.json(clovek);
    } else {
        res.send('Človek s id ' + id + ' neexistuje.');
    }
});

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <head>
        <title>Node aplikace</title>
    </head>
    <body>
        <p>Vítej v mojí aplikaci!</p>
        <p><a href="/Ello">Uvítání</a></p>
        <p><a href="/about">O aplikaci</a></p>
        <p><a href="/json">JSON výstup</a></p>
        <p><a href="/soubor.html">HTML soubor</a></p>
    </body>
    `);
});

app.listen(8000, 'localhost', () => {
    console.log('Server běží na http://localhost:8000...');
});
