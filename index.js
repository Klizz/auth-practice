import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import products from './products';

const APP = express();
const PRODUCTS = require('./routes/productsRoutes');
const AUTH = require('./middlewares/auth');

let total = 0;

APP.use(bodyParser.json());
APP.use('/products', PRODUCTS);
APP.use('/auth', AUTH);

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  res.send("Home");
});

SERVER.listen(5000);