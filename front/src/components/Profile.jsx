// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import RestoreIcon from "@material-ui/icons/Restore";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Hidden,
//   Container,
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 500,
//   },
//   /*   root: {
//     flexGrow: 1,
//     width: "100%",
//     paddingTop: 64,
//     backgroundColor: theme.palette.background.paper,
//   }, */
//   container: {
//     marginTop: theme.spacing(10),
//     marginBottom: theme.spacing(10),
//     backgroundColor: "#fff",
//     width: "100%",
//     border: 2,
//     display: "flex",
//     justifyContent: "center",
//     color: theme.palette.getContrastText("#00695c"),
//     // backgroundColor: "#00695c",
//   },
// }));

// export default function SimpleBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <div>
//       <Container className={classes.container}>
//         <BottomNavigation
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//           showLabels
//           position="static"
//           color="#00695c"
//           className={classes.root}
//         >
//           <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//           <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//           <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//         </BottomNavigation>
//       </Container>
//     </div>
//   );
// }

import React from "react";
import axios from "axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import { PersonPin, Help, ShoppingBasket } from "@material-ui/icons";
import { getUserFavorites } from "../store/favorite";
import Favorites from "./Favorites";
import ProfileUserInfo from "./ProfileUserInfo";
//import UserOrders from "./UserOrders";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
  Container,
} from "@material-ui/core";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 64,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    marginBottom: theme.spacing(10),
    backgroundColor: "#fff",
    width: "90%",
    border: 2,
  },
  card: {
    marginTop: 10,
  },
}));

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    console.log(user.id);
    dispatch(getUserFavorites(user.id));
  }, [user.id]);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Favoritos" icon={<FavoriteIcon />} {...a11yProps(0)} />
            <Tab label="Ordenes" icon={<ShoppingBasket />} {...a11yProps(1)} />
            <Tab label="Perfil" icon={<PersonPin />} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Favorites />
        </TabPanel>

        {/*  <TabPanel value={value} index={1}>
          <UserOrders />
        </TabPanel> */}
        <TabPanel value={value} index={2}>
          <ProfileUserInfo />
        </TabPanel>
      </Container>
    </div>
  );
}
