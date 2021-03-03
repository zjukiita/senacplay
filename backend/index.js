const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser')
const { Filme } = require('./models');


app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.send('running :P');
});

app.get('/filmes', async (req, res) => {
    const filmes = await Filme.findAll();
    res.status(200).json(filmes);
});
app.get('/filmes/:id', async (req, res) => {
    const filmes = await Filme.findAll({
        where: {

            id: req.params.id
        }

    });
    res.status(200).json(filmes)
});

app.post('/filmes', async (req, res) => {
    const filmes = await Filme.create(req.body)

    res.status(201).json(filmes)

});

app.put('/filmes/:id', async (req, res) => {
    const filmes = await Filme.update(req.body,{
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(filme);
});


app.listen(process.env.PORT || port);