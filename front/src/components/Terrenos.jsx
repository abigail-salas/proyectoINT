import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { grey, purple } from "@material-ui/core/colors";
import { Link as RouterLink, useHistory } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getPropertyByType } from "../store/property";
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
    justifyContent: "center",
  },
}));

export default function Products() {
  const classes = useStyles();
  const property = useSelector((state) => state.property);
  console.log(property, "-----CASAAAAS");
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  useEffect(() => {
    dispatch(getPropertyByType("Terreno"));
  }, []);

  /*   //Alert a favs
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

    const handleClick = (product) => {
    dispatch(addToLocalCart(product));
    handleOpenCarrito();
  };

  const addFav = (productId) => {
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
                {property.map((property) => (
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
                          <Typography gutterBottom variant="h5" component="h2">
                            {`${property.type} en ${property.location}`}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {property.description}
                          </Typography>
                          <Typography>{`$${property.price}`}</Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <IconButton>
                          <FavoriteIcon /* onClick={() => addFav(property.id)} */
                          />

                          {/*  <Snackbar
                            open={favs}
                            autoHideDuration={1500}
                            onClose={handleCloseFavs}
                          >
                            <Alert severity="success" color="info">
                              Se agregó a Favoritos!
                            </Alert>
                          </Snackbar> */}
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

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import { getPropertyByType } from "../store/property";

// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import Carrucel from "../components/Carrucel";
// import { Container } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     marginTop: 10,
//   },
//   media: {
//     height: 140,
//   },

//   cardGrid: {
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "50%",
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   mainGrid: {
//     marginTop: theme.spacing(3),
//   },
//   header: {
//     marginTop: theme.spacing(5),
//   },
// }));

// export default function MediaCard() {
//   const theme = useTheme();
//   const classes = useStyles();
//   const property = useSelector((state) => state.property);
//   console.log(property, "-----CASAAAAS");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPropertyByType("Terreno"));
//   }, []);

//   return (
//     <>
//       <Carrucel />

//       <Container className={classes.header}>
//         <Grid container spacing={5} className={classes.mainGrid}>
//           <Grid item xs={12} md={10}>
//             <Container className={classes.cardGrid} maxWidth="md">
//               <Grid container spacing={4}>
//                 {property.map((property) => (
//                   <Grid item key={property.id} xs={12} sm={6} md={4}>
//                     <Card className={classes.card}>
//                       <CardActionArea>
//                         <CardMedia
//                           className={classes.media}
//                           image={property.img}
//                           title="Contemplative Reptile"
//                         />
//                         <CardContent>
//                           <Typography gutterBottom variant="h5" component="h2">
//                             {`${property.type} en ${property.location}`}
//                           </Typography>
//                           <Typography
//                             variant="body2"
//                             color="textSecondary"
//                             component="p"
//                           >
//                             {property.description}
//                           </Typography>
//                           <Typography>{`$${property.price}`}</Typography>
//                         </CardContent>
//                       </CardActionArea>
//                       <CardActions>
//                         <FavoriteIcon />
//                       </CardActions>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Container>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }
