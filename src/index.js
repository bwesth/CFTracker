import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Main/App";
import * as serviceWorker from "./Main/serviceWorker";

import { meateater, vegetarian, vegan } from "./Data/intensityKilo";
console.log("Meateater intensitykilogram: " + meateater());
console.log("Vegetarian intensitykilogram: " + vegetarian());
console.log("Vegan intensitykilogram: " + vegan());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
