import { useEffect, useState } from "react";
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
//import jj from "../../assets/propiedades.json";
import axios from "axios";

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
  const [property, setProperty] = useState([]);

  const classes = useStyles();
  const theme = useTheme();

  /*   const handleProperty = (event) => {
    event.preventDefault();
    axios
      .get("/api/properties")
      .then((res) => {
        console.log(res, "------res en property");
        setProperty(res.data);
      })
      .catch((e) => console.log(e, "--error en property"));
  }; */

  /*   useEffect(() => {
    axios
      .get("../../assets/propiedades.json")
      .then((res) => {
        console.log(res, "------res en property");
      })
      .catch((e) => console.log(e, "--error en property"));
  }, []); */

  const propi = () => {
    console.log(property, "-------LA PROPERTYYY");
    return property.length > 0
      ? property.map((proper) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={proper.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${proper.type} en ${proper.location}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {proper.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <FavoriteIcon />
            </CardActions>
          </Card>
        ))
      : "";
  };

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
        {}
      </Container>
    </>
  );
}
