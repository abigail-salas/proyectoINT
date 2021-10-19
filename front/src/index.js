/* import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);*/

import React, { useState, createContext, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

import App from "./containers/App";

export const UserContext = createContext();

const Root = () => {
  const [user, setUser] = useState({});

  // useEffect(() => {}, []);

  return (
    <Router>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <App />
        </UserContext.Provider>
      </Provider>
    </Router>
  );
};

export default render(<Root />, document.getElementById("root"));
