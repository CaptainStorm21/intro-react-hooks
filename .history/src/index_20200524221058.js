import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello from {props.library}</h1>
      <h3>{props.message}</h3>
      <
    </div>
  )
}

// function Hello() {
//   return (
//     <div>
//       <p> rendering is happening </p>
//       <h1>Hello world!</h1>
//     </div>
//   )
// }
ReactDOM.render(
  //  React.createElement("h1", null, "Hello"),
  // React.createElement("h1", { style: { color: "red" } }, "Hello"),
  // React.createElement("div", { style: { color: "blue" } },
  // React.createElement("h1", null, "Morning")  ),
  // <ul>
  //   <li>Pizza</li>
  //   <li>Sushi</li>
  // </ul>,
  // /* <Hello></Hello>, */ 
  <Hello library="Washington Library" message="Open for all " books={10}/>,
  document.getElementById("root")
);
