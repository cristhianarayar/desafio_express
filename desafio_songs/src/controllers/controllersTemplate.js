require('dotenv').config()
const fs = require('fs')

const URL = process.env.URL

const UrlFile = (req,res) => {
    res.sendFile(URL+'/index.html')
}

const getCanciones = (req,res) =>{
    const repertorio = JSON.parse(fs.readFileSync('repertorio.json','utf8'))
    res.json(repertorio)
}

const addCanciones = (req,res) =>{
    
    const id = req.body.id
    const titulo = req.body.titulo
    const artista = req.body.artista
    const tono = req.body.tono
    
    const repertorios = JSON.parse(fs.readFileSync('repertorio.json','utf8'))
    
    const newRepertorio = {
        id,
        titulo,
        artista,
        tono
    }
    
    repertorios.push(newRepertorio)
    fs.writeFileSync('repertorio.json', JSON.stringify(repertorios))
    res.status(200).send('Se Agrego Satisfactoriamente')
    res.json(newRepertorio)
}

const updCanciones = (req,res) =>{
    
    const {id} = req.params

    const titulo = req.body.titulo
    const artista = req.body.artista
    const tono = req.body.tono   

    const repertorios = JSON.parse(fs.readFileSync('repertorio.json','utf8'))

    const udpRepositorio =  repertorios.map( repo => repo.id == id ? {id, ...repo, titulo : titulo, artista : artista, tono: tono } : repo)

    fs.writeFileSync('repertorio.json', JSON.stringify(udpRepositorio))
    res.status(200).send('Fue Modificado Satisfactoriamente')

}

const dltCanciones = (req,res) =>{
    const {id} = req.params

    const repertorios = JSON.parse(fs.readFileSync('repertorio.json','utf8'))
    
    const filterRepertorio = repertorios.filter( repo => repo.id != id)
    
    fs.writeFileSync('repertorio.json', JSON.stringify(filterRepertorio))
    res.status(200).send('Se Elimino Satisfactoriamente')
}

module.exports = {UrlFile, getCanciones, addCanciones, updCanciones, dltCanciones}