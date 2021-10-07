const express = require("express");
const userRouter = express.Router();
const User = require("../models/UsersModel");

userRouter.get("/", (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(next);
});

userRouter.get("/:id", (req, res, next) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then((user) => {
      if (!user) res.status(404);
      res.send(user);
    })
    .catch(next);
});

userRouter.put("/:id", (req, res, next) => {
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

// actualizar usuario

userRouter.put("/update/:id", (req, res, next) => {
  console.log(req.body.password);
  if (req.body.password) {
    User.findOne({
      where: { id: req.params.id },
    }).then((user) => {
      user
        .hash(req.body.password, user.salt) // hasheo nuevo password con salt en BD
        .then((hash) => {
          User.update(
            { ...req.body, password: hash },
            {
              where: { id: req.params.id },
              returning: true,
            }
          ).then(([noData, data]) => {
            res.json({
              message: "Updated successfully",
              user: data,
            });
          });
        })
        .catch(next);
    });
  } else {
    console.log("NO INGRESO PASSWORD");
  }
});

module.exports = userRouter;
