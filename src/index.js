import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppJSX from "./AppJSX";
import AppProfile from "./AppProfile";
import AppCounter from "./AppCounter";
import AppProducts from "./AppProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);
