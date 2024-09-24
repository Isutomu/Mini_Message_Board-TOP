import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("yahalo!");
});

app.listen(PORT, () =>
  console.log(`Server properly initializer on port: ${PORT}`)
);
