import React, { useContext } from "react";
//import { useSelector, useDispatch } from "react-redux";
//const user = useSelector((state) => state.user);

import { alpha, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Link,
  MenuItem,
  Menu,
  Chip,
  Button,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import FaceIcon from "@material-ui/icons/Face";

import { Link as RouterLink, useHistory } from "react-router-dom";

import axios from "axios";
import { UserContext } from "../index";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "withe",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButton: {
    color: "white",
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [nav, setNav] = React.useState(null);
  const open = Boolean(nav);
  const handleClick = (event) => {
    setNav(event.currentTarget);
  };
  const handleClose = () => {
    setNav(null);
  };

  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const handleLogout = () => {
    axios
      .post("/api/auth/logout")
      .then(() => {
        setUser({});
        history.push("/");
      })
      .catch();
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleHome = (event) => {
    event.preventDefault();
    history.push("/Home");
    console.info("cambio a home");
  };
  const handleSales = (event) => {
    event.preventDefault();
    history.push("/ventas");
    setNav(null);
    console.info("cambio a ventas");
  };
  const handleRentals = (event) => {
    event.preventDefault();
    history.push("/alquileres");
    setNav(null);
    console.info("cambio a alquileres");
  };
  const handleCompras = (event) => {
    event.preventDefault();
    history.push("/compras");
    setNav(null);
    console.info("cambio a compras");
  };

  const handleProfile = (event) => {
    event.preventDefault();
    history.push("/profile");
    setAnchorEl(null);

    console.info("cambio a profile");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    history.push("/login");
    setAnchorEl(null);

    console.info("cambio a login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    history.push("/register");
    setAnchorEl(null);

    console.info("cambio a register");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = () => {
    return user.id ? (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleProfile}>Mi cuenta</MenuItem>
        <MenuItem onClick={handleLogout}>Salir</MenuItem>
      </Menu>
    ) : (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogin}>Entrar</MenuItem>
        <MenuItem onClick={handleRegister}>Registrarse</MenuItem>
      </Menu>
    );
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={nav}
            keepMounted
            open={Boolean(nav)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleSales}>Vender</MenuItem>
            <MenuItem onClick={handleCompras}>Comprar</MenuItem>
            <MenuItem onClick={handleRentals}>Alquilar</MenuItem>
            <MenuItem onClick={handleClose}>Contacto</MenuItem>
          </Menu>

          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            style={{ color: "white" }}
            onClick={handleHome}
          >
            <Typography className={classes.title} noWrap>
              inmobiliaria
            </Typography>
          </Button>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={20} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="secondary"
            >
              <Chip
                icon={<FaceIcon className={classes.navButton} />}
                label={user.id ? user.userName : "Tu cuenta"}
                variant="outlined"
                className={classes.navButton}
              />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu()}
    </div>
  );
}
