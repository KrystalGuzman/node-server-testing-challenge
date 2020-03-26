const express = require("express");
const helperRouter = require('../helpers/helpers-router');

const server = express();

server.use(express.json());
server.use("/api", helperRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});
server.get("/api", (req, res) => {
  res.status(200).json({ api: "up" });
});
module.exports = server;
