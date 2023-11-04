const express = require('express');
const app = express();

app.use(express.json())

const perifericos = [
    {
        id: 1,
        name: "teclado"
    },
    {
        id: 2,
        name: "mouse"
    },
    {
        id: 3,
        name: "monitor"
    }
]

app.get('/perifericos', (req, res) => {
    res.send(perifericos);
});

app.get('/perifericos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const periferico = (perifericos.find(c => c.id === id));
    if (!periferico) {
        return res.status(404).send('Not Found');
    }
    res.send(periferico);
});

app.put('/perifericos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const periferico = (perifericos.find(c => c.id === id));
    const name = req.body.name;
    if (!periferico) {
        return res.status(404).send('Not Found');
    }
    if (!name) {
        return res.status(400).send('Need to write a name');
    }
    periferico.name = name;
    res.send(periferico);
})

app.post('/perifericos', (req, res) => {
    const name = req.body.name;
    if (!name) {
        res.status(400).send('Need to write a name');
    }
    const periferico = {
        id: perifericos.length + 1,
        name: name,
    }
    perifericos.push(periferico);
    res.send(perifericos);
})

app.delete('/perifericos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const periferico = (perifericos.find(c => c.id === id));
    if (!periferico) {
        return res.status(404).send('Not Found');
    }
    const index = perifericos.indexOf(periferico);
    perifericos.splice(index, 1);
    res.send(perifericos);
})

app.listen(3000, () => console.log("3000..."));