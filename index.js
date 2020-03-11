import http from 'http';
import express from 'express';
import products from './products'

const APP = express();

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  res.send(products[0]);
});

SERVER.listen(5000);