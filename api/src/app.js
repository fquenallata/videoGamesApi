const express = require("express");
const morgan = require("morgan");
const allRoutes = require("./routes");
const server = express();

server.name = "API";

//urlencode para formularios? const urlencode = express.urlencode({extended: false})
server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", allRoutes);
server.use(morgan("dev"));

module.exports = server;
