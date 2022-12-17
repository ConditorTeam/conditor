const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.send('Live with Conditor!')
})

app.listen(port, () => {
    console.log('Ready on port ' + port)
})