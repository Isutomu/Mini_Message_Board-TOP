require("dotenv").config();
const express = require("express");
const path = require("node:path");
const dbRouter = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", dbRouter);

app.listen(PORT, () =>
  console.log(`Server properly initializer on port: ${PORT}`)
);
