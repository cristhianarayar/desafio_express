const { UrlFile, getCanciones, addCanciones, updCanciones, dltCanciones} = require("../../controllers/controllersTemplate")
const fileroute = require('express').Router()

fileroute.get("/", UrlFile)
fileroute.get("/canciones",getCanciones)
fileroute.post("/canciones",addCanciones)
fileroute.put("/canciones/:id",updCanciones)
fileroute.delete("/canciones/:id",dltCanciones)

module.exports = fileroute
