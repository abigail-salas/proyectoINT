/* import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
//import store from "./store/store.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Route path="/" component={App} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
); */

import React, { useState, createContext } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./containers/App";

export const UserContext = createContext();

const Root = () => {
  const [user, setUser] = useState({});

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <App />
      </UserContext.Provider>
    </Router>
  );
};

export default render(<Root />, document.getElementById("root"));
