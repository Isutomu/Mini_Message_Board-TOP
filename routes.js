const { Router } = require("express");
const controller = require("./controller");

const dbRouter = Router();

dbRouter.get("/", controller.getAllMessages);
dbRouter.get("/message/:id", controller.getMessage);
dbRouter.get("/new", controller.createMessageGet);
dbRouter.post("/new", controller.createMessagePost);

module.exports = dbRouter;
