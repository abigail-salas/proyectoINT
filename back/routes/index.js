const express = require("express");
const Router = express.Router();
const users = require("./users");
const authRouter = require("./auth");
const favorites = require("./favorites");

Router.use("/user", users);
Router.use("/auth", authRouter);
//Router.use("/favorites", favorites);

module.exports = Router;
