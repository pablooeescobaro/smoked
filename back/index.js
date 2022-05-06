const express = require("express");
const bodyParser = require("body-parser");
const { connect } = require("mongoose");
const { createServer } = require("http");
const { routes } = require("./src/routes");

//Connect to DB
connect("mongodb://localhost:27017/smoked", {
  useNewUrlParser: true,
});

//App init
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
});

const PORT = 3001;
createServer({}, app).listen(PORT);
console.log("Server running at", PORT);
//Route declaration
