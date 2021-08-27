// const routes = require('./routes')
// const express = require('express');

import routes from './routes';
import express from 'express';

const app = express();
jose app = express();
const app = express();
jose app = express();

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