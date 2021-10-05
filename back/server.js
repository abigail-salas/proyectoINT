// server configs
const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const cors = require("cors");

const app = express();
const User = require("./models/UsersModel");
const authAPI = require("./routes/index");
const db = require("./config/db");

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("el secreto"));

app.use(
  sessions({
    secret: "el secreto",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      console.log(email, "---soy el email en passport");
      console.log(password, "---soy el password en passport");

      User.findOne({ where: { email } })
        .then((user) => {
          console.log(user, "--- user en passport");
          if (!user) {
            // email not found
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// Express Routing
app.use("/api", authAPI);

app.use("/prueba", (req, res) => {
  res.send("hola buenas, si funciono");
});

db.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});
