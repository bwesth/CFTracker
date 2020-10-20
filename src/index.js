import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Main/App";
import * as serviceWorker from "./Main/serviceWorker";

import {
  meateater,
  vegetarian,
  vegan,
  car,
  train,
  walking_biking,
} from "./Data/intensityKilo";
console.log("Meateater intensitykilogram: " + meateater());
console.log("Vegetarian intensitykilogram: " + vegetarian());
console.log("Vegan intensitykilogram: " + vegan());
console.log("Car intensitykilogram: " + car());
console.log("Train intensitykilogram: " + train());
console.log("Walking/biking intensitykilogram: " + walking_biking());

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
