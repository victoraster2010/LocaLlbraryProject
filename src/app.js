const express = require('express');

const app = express();

app.use(express.json());
//declare your routes/ middlewares here


module.exports = app