const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json';
const endpointFiles = ['./src/routes.js'];
const doc = {
    info: {
        version: "1.0.0",
        title: "Trabalho Marvel API",
        description: "Adapter for the Marvel api."
    },
    host: "https://polar-river-85704.herokuapp.com/",
    schemes:['https']
}

swaggerAutogen(outputFile, endpointFiles, doc);