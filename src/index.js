import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, HashRouter } from "react-router-dom";

// Dinamik router tanlash uchun flag
const useHashRouter = false; // Agar true bo'lsa, HashRouter ishlatiladi, aks holda BrowserRouter ishlatiladi
const RouterComponent = useHashRouter ? HashRouter : BrowserRouter;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterComponent>
        <App />
        <ToastContainer />
      </RouterComponent>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
