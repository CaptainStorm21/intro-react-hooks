import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const nationalParkList = ["Yosemite", "Sequioa", "Montana"];
const campingList = [
  {
    id: 0,
    name: "Mulberry Camp",
    location: " South Montana",
  },
  {
    id: 1,
    name: "Volga Camp",
    location: "Oregon",
  },
  {
    id: 2,
    name: "Captain Camp",
    location: "East Montana",
  },
  {
    id: 3,
    name: "Blue Dunes Camp",
    location: "South Montana",
  },
];

function Lake({ name }) {
  return <h3>{name}</h3>;
}

function Fishing({ abundant }) {
  return (
    < div >
      <h3> Catching fish is {abundant}</h3>
    </div >
  )
}

function Icehole ({ icefishing }) {
  return (
    < div >
      <h3> Winter Fish is {icefishing}</h3>
    </div >
  )
}

function MontanaFall() {
  return (
    <div>
      <h3>Come see Montana!</h3>
      <hr></hr>
      <div className="campstyle">
        {campingList.map((camp) => (
          <div key={camp.id}>
            <h4>{camp.name}</h4>
            <p>Location:{camp.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkiResort({thingstodo}) {
  return (
    <div>
      <h1>Visit Washington State Tree Houses</h1>
      <h5>Most popular thing to do is {thingstodo}</h5>
    </div>
  );
}
function App(props) {
  if (props.season === "fall") {
    return <MontanaFall />;
  } else if (props.season === "summer"){
    return (
      <div>
        <SkiResort  thingstodo="hiking"/>
        <h3>Favorite Lakes</h3>
        <div className="lakestyle">
          <Lake name="Yosemite Lake" />
          <Lake name="Tahoe Lake" />
          <Lake name="Vermont Lake" />
          <hr></hr>
          <h3>National Parks</h3>
          <ol>
            {props.parks.map((park) => (
              <li>{park}</li>
            ))}
          </ol>
          <hr></hr>
          <h1>If there is fish</h1>
          <div>
            {props.season === "summer" ? (
              <Fishing abundant = "1000 different fish" />
            ) : props.season === "winter" ?  <Icehole  }
          </div>
        </div>
      </div>
    );
  }
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
  <App parks={nationalParkList} season="summer" />,
  document.getElementById("root")
);
