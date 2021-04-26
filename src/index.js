const express = require('express')
const app = express()
const router = require('./routes/character.route')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

app.use(express.json())
app.use('/', router)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const port = process.env.PORT

app.listen(port || 8080, () => {
    console.log('Start')
})

