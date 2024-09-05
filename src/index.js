import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import { HashRouter } from "react-router-dom";
import HashRoutes from "./HashRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <HashRoutes />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
