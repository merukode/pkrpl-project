import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./provider/Provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cart from "../src/screens/Cart/Cart"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>
);
