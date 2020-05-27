import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  //  React.createElement("h1", null, "Hello"),
  // React.createElement("h1", { style: { color: "red" } }, "Hello"),
  React.createElement("div", { style: { color: "blue" } },
  React.createElement("h1", null, "")
  ),
  document.getElementById("root")
);
