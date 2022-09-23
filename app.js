const express = require("express");
const axios = require("axios");
const eventsRoutes = require("./eventsRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/events", eventsRoutes);

  
module.exports = app;