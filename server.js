const express = require('express')
const path = require('path')
const body = require('body-parser')
const routes = require('./routes/index')

require('dotenv').config()
require('./models/index')

const PORT = process.env.PORT || 5000
const app = express()

app.engine('ejs', require('ejs-locals'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', routes)

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`___________________________________________________________`)
        console.log(`> Application server initiated at port: ${PORT}`)
    } else {
        console.log(`___________________________________________________________`)
        console.log(`> Error occured while starting the application server > ${err}`)
        console.log(`___________________________________________________________`)
    }
})
