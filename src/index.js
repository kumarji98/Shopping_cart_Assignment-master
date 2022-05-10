import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/_base.scss";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalContextProvider from "./contexts/GlobalContext";
 import { Provider } from "react-redux";
import store from "./../src/reducers/index";

ReactDOM.render(
  <Router>
    <GlobalContextProvider>
    <Provider store={store}>

      <App />
      </Provider>
    </GlobalContextProvider>
  </Router>,
  document.getElementById("app")
);
