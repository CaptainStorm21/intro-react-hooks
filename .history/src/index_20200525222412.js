import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const nationalParkList = [
  "Yosemite",
  "Sequioa",
  "Montana"
];

const campingList = [
  {
    id: 1,
    name: "Mulberry Camp",
    location: "Montana",
  },
  {
    id: 2,
    name: "Captain Camp",
    location: "Montana",
  },
  {
    id: 3,
    name: "Blue Dunes Camp",
    location: "Montana",
  },
];

function Lake({name}) {
  return <h3>{name}</h3>
}

function App(props) {
  return (
    <div>
      <h3>Favorite Lakes</h3>
      <div className = "lakestyle">
      <Lake  name="Yosemite Lake" />
      <Lake name="Tahoe Lake" />
        <Lake name="Vermont Lake" />
        <hr></hr>
        <h3>National Parks</h3>
        <ol>
          {props.parks.map(park => (
            <li>{park}</li>
          ))}
      </ol>
      </div>
    </div>
  );
}



// function Hello({ library, message, books }) {
//   return (
//     <div>
//       <h1>Hello {library}</h1>
//       <h4>books avail to rent {books}</h4>
//       <h5>Hours: {message}</h5>
//     </div>
//   )
// }


// function Hello(props) {
//   console.log(props);
//   console.log(Object.keys(props));
//   return (
//     <div>
//       <h1>Hello from {props.library}</h1>
//       <h3>{props.message}</h3>
//       <h4> books available to rent - {props.books}</h4>
//       <h5>Props used - {Object.keys(props).length}</h5>
//     </div>
//   )
// }

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
  // <Hello library="Washington Library" message="Open for all " books={10}/>,
  <App parks={nationalParkList} />,
  document.getElementById("root")
);
