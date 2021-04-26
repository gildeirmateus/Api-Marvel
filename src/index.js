const express = require('express')
const app = express()
const router = require('./routes/character.route')

app.use(express.json())
app.use('/', router)

const port = process.env.PORT

app.listen(port || 8080, () => {
    console.log('Start')
})

