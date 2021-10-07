import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
//import { addToLocalCart } from "../store/cart";
//import { addFavorite } from "../store/favorites";

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
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Alert from "@material-ui/lab/Alert";
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
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Property() {
  const classes = useStyles();
  const property = useSelector((state) => state.property);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [state, setState] = useState({ open: false });
  const [messageInfo, setMessageInfo] = useState(undefined);

  React.useEffect(() => {
    setState({ open: true });
  }, [messageInfo]);

  const handleClose = () => {
    setState({ open: false });
    setMessageInfo("");
    return;
  };

  //Alert a carrito
  const [carrito, setCarrito] = useState(false);
  const handleOpenCarrito = () => {
    setCarrito(true);
  };
  const handleCloseCarrito = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCarrito(false);
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
  ////

  /*   const handleClick = (product) => {
    dispatch(addToLocalCart(product));
    handleOpenCarrito();
  }; */

  /*   const addFav = (productId) => {
    if (!user.id) {
      setMessageInfo(
        "Debes estar logueado! \nPor favor, accede a tu cuenta..."
      );
    } else {
      dispatch(addFavorite({ userId: user.id, productId: productId }));
      handleOpenFavs();
    }
  }; */

  return (
    <Grid item xs={12} md={10}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <Link href={`/products/1`}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.ferretti.com.ar/wp-content/uploads/2021/09/IMG-20210914-WA0046-350x350.jpg"
                  title="Image title"
                />
              </Link>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Casa
                </Typography>
                <Typography>15.000</Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  //onClick={() => handleClick(product)}
                >
                  <AddShoppingCartIcon />

                  <Snackbar
                    open={carrito}
                    autoHideDuration={1500}
                    onClose={handleCloseCarrito}
                  >
                    <Alert severity="success" color="info">
                      Se agregó al Carrito!
                    </Alert>
                  </Snackbar>
                </IconButton>
                <IconButton color="primary">
                  <FavoriteIcon /* onClick={() => addFav(product.id)} */ />

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
        </Grid>
      </Container>
    </Grid>
  );
}
