import express from "express";
import "dotenv/config";
import path from "node:path";

const app = express();
const PORT = process.env.PORT || 3000;
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("messages", { messages });
});

app.listen(PORT, () =>
  console.log(`Server properly initializer on port: ${PORT}`)
);
