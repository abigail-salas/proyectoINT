import React, { useState, useContext } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { UserContext } from "../index";

const useStyles = makeStyles((theme) => ({
  color: {
    color: theme.palette.getContrastText("#00695c"),
    backgroundColor: "#00695c",
  },
}));

export default function Login() {
  const theme = useTheme();
  const classes = useStyles();

  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/auth/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.log(res, "esto es el response");
        setUser(res.data);
      })
      .then(() => {
        history.push("/home");
      });
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        marginTop: theme.spacing(2),
      }}
    >
      <div>
        <Typography variant="h4" gutterBottom>
          Login de usuario
        </Typography>

        {/* {messageInfo ? (
          <Snackbar
            open={open.open}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="error" onClose={handleClose}>
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                }}
              >
                {messageInfo}
              </div>
            </Alert>
          </Snackbar>
        ) : null} */}

        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                /* type="email"
                class="form-control"
                id="exampleInputemail"
                aria-describedby="emailHelp"
                placeholder="Nombre de usuario"
                {...email} */
                label="Email"
                name="email"
                //value={email.value}
                //onChange={email.onChange}
                size="small"
                variant="outlined"
                required
                {...email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                /* type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                {...password} */
                label="Contraseña"
                name="password"
                //value={password.value}
                //onChange={password.onChange}
                size="small"
                type="password"
                variant="outlined"
                {...password}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                className={classes.color}
              >
                Entrá a tu cuenta
              </Button>

              <Grid item>
                <Link
                  component={RouterLink}
                  to="/register"
                  href="#"
                  variant="body2"
                >
                  Todavía no tienes cuenta ?
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
