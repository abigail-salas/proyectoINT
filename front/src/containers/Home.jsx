import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import Property from "../components/Property";
import Carrucel from "../components/Carrucel";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 10,
  },
  media: {
    height: 140,
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  header: {
    marginTop: theme.spacing(10),
  },
  secciones: {
    marginTop: theme.spacing(3),
  },
}));

export default function MediaCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <Carrucel />
      <Container maxWidth="lg" className={classes.header}>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Property />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
