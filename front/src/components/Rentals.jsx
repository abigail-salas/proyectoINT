import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Carrucel from "../components/Carrucel";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 10,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Carrucel />
      <Container
        component="main"
        maxWidth="xs"
        style={{
          marginTop: theme.spacing(2),
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.ferretti.com.ar/wp-content/uploads/2021/09/IMG-20210914-WA0046-350x350.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                SOY LOS ALQUILERES
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <FavoriteIcon />
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
