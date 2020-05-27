import React from "react";
import "./App.css";

function Kids() {
    return (
        <h1>Children at play!</h1>
    )
}

function Kayak() {
    return (
        <h2> Kayaking going on </h2>
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
