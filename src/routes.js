//const { Router } = require('express')

import { Router } from 'express'

const routes  = new Router();

routes.get('/', (req, res) =>{
    res.send("Adriano");
})

routes.get('/contatos', (req, res) =>{
    res.send("Palmeiras");
})


//module.exports = routes;

export default routes;