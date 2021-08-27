//const { Router } = require('express')

import { Router } from 'express'

const routes  = new Router();

routes.get('/', (req, res) =>{
    res.send("Adriano");
})

routes.get('/contatos', (req, res) =>{
    res.send("Patricia I, Rosangela, Luiza, Luciana II, Paula, Roseli, Fabiana, MArtinha, Rita de Cassia, Bianca, Val, Palmeira");
})


//module.exports = routes;

export default routes;