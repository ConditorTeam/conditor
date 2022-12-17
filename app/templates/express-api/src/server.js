const express = require('express');
const morgan = require('morgan');
const { manuel } = require('./data/data');
const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Enter a name to continue.')
})

app.get('/manuel', (req, res) => {
    res.send(manuel);
})

app.listen(port, () => {
    console.log('Ready on port ' + port)
})