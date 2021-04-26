const urlApiMarvel ='http://gateway.marvel.com/v1/public/characters'
const axios = require('axios')

const ts = process.env.ts
const publicKey = process.env.publicKey
const hash = process.env.hash

console.log(ts)
console.log(publicKey)
console.log(hash)

const listAll = (req, res) => {
    var url =`${urlApiMarvel}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    
    axios.get(url).then(function(response){
        res.status(200).send(response.data)
        console.log(response)
        
    }).cath(function(error){
        res.status(404).send({
            message: error
        })
    })
}

const getCharacter = (req, res) => {
    var id = req.params.characterId
    var url = `${urlApiMarvel}/${id}?ts=${ts}&apiKey=${publicKey}&hash=${hash}`
    
    axios.get(url).then(function(response){
        console.log(response)
        res.status(200).send(response.data)
        
    }).cath(function(error){
        res.status(404).send({
            message:`Character ${id} not found`
        })
    })
}

const listComics = (req, res) => {
    var id = req.params.characterId
    var url = `${urlApiMarvel}/${id}/comics?ts=${ts}&apiKey=${publicKey}&hash=${hash}`
    
    axios.get(url).then(function(response){
        console.log(response)
        res.status(200).send(response.data)
        
    }).cath(function(error){
        res.status(404).send({
            message:`Character comics ${id} not found`
        })
    })
}

const listEvents = (req, res) => {
    var id = req.params.characterId
    var url = `${urlApiMarvel}/${id}/events?ts=${ts}&apiKey=${publicKey}&hash=${hash}`
    
    axios.get(url).then(function(response){
        console.log(response)
        res.status(200).send(response.data)
        
    }).cath(function(error){
        res.status(404).send({
            message:`Character events ${id} not found`
        })
    })
}

const listSeries = (req, res) => {
    var id = req.params.characterId
    var url = `${urlApiMarvel}/${id}/series?ts=${ts}&apiKey=${publicKey}&hash=${hash}`
    
    axios.get(url).then(function(response){
        console.log(response)
        res.status(200).send(response.data)
        
    }).cath(function(error){
        res.status(404).send({
            message:`Character series ${id} not found`
        })
    })
}

const listStories = (req, res) => {
    var id = req.params.characterId
    var url = `${urlApiMarvel}/${id}/stories?ts=${ts}&apiKey=${publicKey}&hash=${hash}`
    
    axios.get(url).then(function(response){
        console.log(response)
        res.status(200).send(response.data)
        
    }).cath(function(error){
        res.status(404).send({
            message:`Character stories ${id} not found`
        })
    })
}

module.exports = {
    listAll,
    getCharacter,
    listComics, 
    listEvents,
    listSeries,
    listStories
}