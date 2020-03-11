import express from "express";
import bodyParser from "body-parser";
import products from '../products';
const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const PRODUCTS = express.Router();

PRODUCTS.get("/", (req, res) => {
  res.send(products);
});

PRODUCTS.get("/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    res.json(product);
  });

PRODUCTS.put("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product && product.stock > 0) {
    product.stock--;
    res.json({ status: "ok", result: product });
  } else {
      res.sendStatus(404);
  }
});

module.exports = PRODUCTS;