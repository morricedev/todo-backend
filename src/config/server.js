const express = require("express");
const allowCors = require("./cors");

const port = 3003;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(allowCors);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

module.exports = app;
