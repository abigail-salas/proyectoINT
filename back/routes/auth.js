const express = require("express");
const router = express.Router();
const User = require("../models/UsersModel");
const passport = require("passport");

//console.log(User, "-----esto es user");

router.post("/register", (req, res) => {
  console.log(req.body, "--- register body");
  //res.send("llegue a auth register");
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  const user = req.user;
  console.log("estadooo----", user);
  res.status(201).send(user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
