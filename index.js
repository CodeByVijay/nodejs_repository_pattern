const express = require("express");
const app = express();
const port = 3000;
const apiRoute = require("./route/api.js");

app.use("/", apiRoute);

app.listen(port, () => {});
