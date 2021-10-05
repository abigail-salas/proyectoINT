const express = require("express");
const Router = express.Router();
const User = require("../models/UsersModel");

Router.get("/", (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(next);
});

Router.get("/:id", (req, res, next) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then((user) => {
      if (!user) res.status(404);
      res.send(user);
    })
    .catch(next);
});

Router.put("/:id", (req, res, next) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then(([noData, [data]]) =>
      res.json({
        message: "Updated successfully",
        user: data,
      })
    )
    .catch(next);
});

module.exports = Router;
