import React from "react";
import "./App.css";

function Kids() {
    return (
        <h1>Children at play!</h1>
    )
}

function Kayak() {
    return (
        <div className = "div-style">
            <h2> Kayaking going on </h2>
        </div>
    )
}

function Fragment() {
  return (
      <>
          <div className = "div-style"></div>
      <Kayak />
      <Kids />
    </>
  );
}

export default Fragment;
