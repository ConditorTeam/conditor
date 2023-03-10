const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('Ready on port ' + port)
})