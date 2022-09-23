const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    return res.send("Hello World!");
});

app.get("/staff/:fname", function (req, res) {
    return res.send(`This instructor is ${req.params.fname}`);
});

  
module.exports = app;