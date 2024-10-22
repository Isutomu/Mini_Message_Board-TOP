const asyncHandler = require("express-async-handler");
const queries = require("./db/queries");

const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await queries.getAllMessages();
  res.render("messages", { messages });
});
const getMessage = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const openedMessage = await queries.getMessage(id);
  res.render("messageDetails", { message: openedMessage });
});
const createMessageGet = asyncHandler(async (req, res) => {
  res.render("form");
});
const createMessagePost = asyncHandler(async (req, res) => {
  await queries.insertMessage({
    text: req.body.messageText,
    username: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = {
  getAllMessages,
  getMessage,
  createMessageGet,
  createMessagePost,
};
