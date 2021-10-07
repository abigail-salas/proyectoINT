const express = require("express");
const Router = express.Router();
const users = require("./users");
const authRouter = require("./auth");
//const favorites = require("./favorites");
const categories = require("./categories");
const properties = require("./properties");

Router.use("/user", users);
Router.use("/auth", authRouter);
Router.use("/properties", properties);
Router.use("/categories", categories);
//Router.use("/favorites", favorites);

module.exports = Router;
