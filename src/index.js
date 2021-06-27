
const app = require('./server')

const port = process.env.PORT

app.listen(port || 8080, () => {
    console.log('Start')
})





