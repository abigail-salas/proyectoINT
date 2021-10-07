import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import ranceada from "./ranceada";
import Register from "./Register";
import Login from "./Login";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import PrivateRoute from "../components/PrivateRoute";
import Alquileres from "../components/Rentals";
import Compras from "../components/Compras";
import Ventas from "../components/Sales";
import Carrucel from "../components/Carrucel";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/auth/me").then((res) => {
      console.log(res, "--------res en app");
    });
  });

  return (
    <div>
      <div className="h-full flex justify-center items-center">
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

          <Route path="/carr">
            <Carrucel />
          </Route>

          <Route exact path="/ran" component={ranceada} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
