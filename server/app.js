const express = require('express');
let mongoose = require('./database')
const cors = require('cors');
const bodyParser = require('body-parser');
const image = require('./routes/image')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json()) 

app.use('/api',image)
app.use('/image',express.static('upload/image'))
app.get('/', (req, res) => {
    res.json({
        msg: "hello"
    })
})

module.exports = app;