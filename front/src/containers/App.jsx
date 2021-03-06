import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Ranceada from "../prueba/maps";
import Register from "./Register";
import Login from "./Login";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import PrivateRoute from "../components/PrivateRoute";
import { ThemeProvider } from "@material-ui/core/styles";
import Alquileres from "../components/Rentals";
import Compras from "../components/Compras";
import Ventas from "../components/Sales";
import Carrucel from "../components/Carrucel";
import Casas from "../components/Casas";
import Departamentos from "../components/Departamentos";
import Terrenos from "../components/Terrenos";
import SingleProductView from "../components/SingleProduct";
import axios from "axios";

import credential from "../prueba/credential";
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credential.mapsKey}`;

function App() {
  useEffect(() => {
    axios.get("/api/auth/me").then((res) => {
      console.log(res, "--------res en app");
    });
  });

  return (
    <div>
      <div className="h-full flex justify-center items-center">
        <ThemeProvider>
          <Navbar />
          <Switch>
            <Route exact path="/home" render={() => <Home />} />

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>

            <Route path="/ventas">
              <Ventas />
            </Route>
            <Route path="/alquileres">
              <Alquileres />
            </Route>
            <Route path="/compras">
              <Compras />
            </Route>

            <Route path="/casas">
              <Casas />
            </Route>
            <Route path="/departamentos">
              <Departamentos />
            </Route>
            <Route path="/terrenos">
              <Terrenos />
            </Route>

            <Route
              exact
              path="/property/:id"
              render={({ match }) => <SingleProductView id={match.params.id} />}
            />

            <Route exact path="/ran">
              <Ranceada
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                googleMapURL={mapURL}
                loadingElement={<div style={{ height: "100%" }} />}
              />
            </Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
