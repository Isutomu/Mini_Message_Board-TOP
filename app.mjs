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
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("messages", { messages });
});
app.get("/new", (req, res) => {
  res.render("form");
});
app.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

app.listen(PORT, () =>
  console.log(`Server properly initializer on port: ${PORT}`)
);
