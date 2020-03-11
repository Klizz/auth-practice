import jwt from "jsonwebtoken";
import express from "express";
import bodyParser from "body-parser";

const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const AUTH = express.Router();

AUTH.put("/", (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!")
    });
  }
});

module.exports = AUTH;
