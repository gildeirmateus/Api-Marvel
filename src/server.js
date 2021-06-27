const express = require('express')
const app = express()
const router = require('./routes/character.route')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

require("dotenv").config()

app.get('/', (req, res)=>{
    res.send('Hello from GitHub Action')
})

app.use(express.json())
app.use('/', router)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))


module.exports = app
