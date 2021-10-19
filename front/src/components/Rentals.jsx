import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { addFavorite } from "../store/favorite";

import { grey, purple } from "@material-ui/core/colors";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link as RouterLink, useHistory } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getPropertyByState } from "../store/property";
import Alert from "@material-ui/lab/Alert";
import Carrucel from "../components/Carrucel";

import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  header: {
    marginTop: theme.spacing(5),
  },
}));

export default function Products() {
  const classes = useStyles();
  const property = useSelector((state) => state.property);
  console.log(property, "-----CASAAAAS");
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();

  const user = useSelector((state) => state.user);

  const [state, setState] = useState({ open: false });
  const [messageInfo, setMessageInfo] = useState(undefined);
  useEffect(() => {
    dispatch(getPropertyByState("alquiler"));
  }, []);

  const handleClose = () => {
    setState({ open: false });
    setMessageInfo("");
    return;
  };

  //Alert a favs
  const [favs, setFavs] = useState(false);
  const handleOpenFavs = () => {
    setFavs(true);
  };
  const handleCloseFavs = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFavs(false);
  };
  const addFav = (productId) => {
    dispatch(addFavorite({ userId: user.id, productId: productId }));
    handleOpenFavs();
  };
  return (
    <>
      <Carrucel />
      <Container
        className={classes.header}
        style={{ marginLeft: theme.spacing(15) }}
      >
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={10}>
            <Container className={classes.cardGrid}>
              <Grid container spacing={4}>
                {Array.isArray(property) &&
                  property.map((property) => (
                    <Grid item key={property.id} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardActionArea
                          //href={`/property/${property.id}`}
                          onClick={(event) => {
                            event.preventDefault();
                            history.push(`/property/${property.id}`);
                          }}
                        >
                          <CardMedia
                            className={classes.cardMedia}
                            image={property.img}
                            title="Image title"
                          />

                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {`${property.type} en ${property.location} (${property.state})`}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {property.description.substring(0, 20) + "..."}
                            </Typography>
                            <Typography>{`$${property.price}`}</Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <IconButton>
                            <FavoriteIcon onClick={() => addFav(property.id)} />

                            <Snackbar
                              open={favs}
                              autoHideDuration={1500}
                              onClose={handleCloseFavs}
                            >
                              <Alert severity="success" color="info">
                                Se agregó a Favoritos!
                              </Alert>
                            </Snackbar>
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
