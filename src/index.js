const express = require('express')
const router = require('./routes/character.route')

const app = express()

app.use(express.json())
app.use('/', router)

const port = process.env.PORT || 8080

app.listen(port || 8080, () =>{
    console.log('Start')
})