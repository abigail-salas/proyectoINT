import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import axios from "axios";
import { UserContext } from "../index";
import { useInput } from "../hooks/useInput";

const useStyles = makeStyles((theme) => ({
  grey: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(5),
    margin: theme.spacing(1),
  },
  color: {
    color: theme.palette.getContrastText("#00695c"),
    backgroundColor: "#00695c",
  },
}));

const Register = () => {
  // const { user } = useContext(UserContext);
  const theme = useTheme();
  const classes = useStyles();

  const history = useHistory();

  const email = useInput("email");
  const password = useInput("password");
  const userName = useInput("userName");
  const firstName = useInput("firstName");
  const lastName = useInput("lastName");
  const city = useInput("city");
  const province = useInput("province");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/auth/register", {
        userName: userName.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        city: city.value,
        province: province.value,
      })
      .then((res) => {
        console.log(res.data, "res data---");
        if (res.data.id) return history.push("/login");
        alert("algo malio sal");
      })
      .catch((e) => console.log(e, "--error"));
  };

  const {
    control,
    formState: { errors }, // get the errors object
  } = useForm();

  return (
    <React.Fragment>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          marginTop: theme.spacing(2),
        }}
      >
        <Typography variant="h4" gutterBottom>
          Registro
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="userName"
                defaultValue=""
                control={control}
                rules={{
                  required: "El nombre de usuario es requerido",
                  maxLength: {
                    value: 20,
                    message:
                      "El nombre de usuario debe ser menos de 20 caracteres",
                  },
                }}
                fullWidth
                render={({ field: { value, onChange } }) => (
                  <TextField
                    required
                    id="userName"
                    name="userName"
                    label="Nombre de usuario"
                    fullWidth
                    autoComplete="given-name"
                    {...userName}
                  />
                )}
              />
              {/* 
            <TextField
                    value={value}
                    onChange={onChange}
                    label="Nombre de usuario"
                    error={errors.firstName ? true : false}
                  /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "El password es requerido",
                  maxLength: {
                    value: 20,
                    message:
                      "El password debe ser menos de 20 caracteres y contener al menos una letra y un numero.",
                  },
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                    message:
                      "El password es requerido: al menos una letra y un numero",
                  },
                }}
                fullWidth
                render={({ field: { value, onChange } }) => (
                  <TextField
                    required
                    type="password"
                    // class="form-control"
                    id="exampleInputPassword1"
                    //  id="password"
                    name="password"
                    label="Contraseña"
                    fullWidth
                    autoComplete="family-name"
                    {...password}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field: { value, onChange } }) => (
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Nombre"
                    fullWidth
                    autoComplete="given-name"
                    {...firstName}
                  />
                )}
                name="firstName"
                control={control}
                defaultValue=""
                rules={{
                  required: "El Nombre completo es requerido",
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Apellido"
                fullWidth
                autoComplete="family-name"
                {...lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "El mail es requerido",
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Debes usar un mail valido, por favor corrigelo.",
                  },
                }}
                fullWidth
                render={({ field: { value, onChange } }) => (
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="shipping address-line1"
                    {...email}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="Ciudad"
                fullWidth
                autoComplete="shipping address-level2"
                {...city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="province"
                name="province"
                label="Provincia"
                fullWidth
                {...province}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // disabled={!form.isValid}
              className={classes.color}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/login"
                  href="#"
                  variant="body2"
                >
                  Ya tienes una cuenta? Ingresa aqui.
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Register;
