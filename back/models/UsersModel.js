const S = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    userName: {
      type: S.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Username already exist!",
      },
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
      validate: {
        isEmail: true,
      },
    },
    isAdmin: {
      type: S.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    firstName: {
      type: S.STRING,
    },
    lastName: {
      type: S.STRING,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    province: {
      // Provincia bs, tucuman , salta ...
      type: S.STRING,
    },
    city: {
      //Ciudad, san martin, villa del parque ...
      type: S.STRING,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize, modelName: "user" }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
