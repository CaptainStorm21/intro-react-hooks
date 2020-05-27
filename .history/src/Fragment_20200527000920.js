import React from "react";
import "./App.css";

function Kids() {
    return (
        <h1>Children at play!</h1>
    )
}

function Kayak() {
    return (
        <div className = "paddi">
            <h2> Kayaking going on </h2>
        </div>
    )
}

function Fragment() {
  return (
    <>
      <Kayak />
      <Kids />
    </>
  );
}

export default Fragment;
