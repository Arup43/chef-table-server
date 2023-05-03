const express = require('express')
const app = express()
const cors = require('cors')

const chefs = require('./data/chefs.json');

app.use(express.json())
app.use(cors())

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const chef = chefs.find(chef => chef.id === req.params.id)
    res.send(chef);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})