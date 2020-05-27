import React from "react";
import "./App.css";

const [first, second, third, fouth] = [
    ""
];

function Kids() {
    return (
        <h1>Children at play!</h1>
    )
}

function Kayak() {
    return (
        <div >
            <h2> Kayaking going on </h2>
        </div>
    )
}

function Fragment() {
  return (
      <>
          <div className = "div-style">
      <Kayak />
              <Kids />
          </div>
    </>
  );
}

export default Fragment;
