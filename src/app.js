// const express = require('express');
// const routes = require('./routes')

import express from 'express';
import routes from './routes';

const app = express();

class App{
    constructor(){
        this.app = express();
        this.routes();
    }

    routes(){
        this.app.use(routes);
    }
}

//module.exports = new App().app;

export default new App().app;