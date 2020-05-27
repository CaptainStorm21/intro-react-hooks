import React, { useState } from "react";
import "./App.css";

// const [first, second, third, fouth] = ["Mary", "Katy", "Ludwig", "Stephen"];

// function Kids() {
//   return <h1>Children at play!</h1>;
// }

// function Kayak() {
//   return (
//     <div>
//       <h2> Kayaking going on </h2>
//     </div>
//   );
// }

function Fragment() {
    const [status, setStatus] = useState("Open");
  return (
    <>
      <div className="div-style">
              <h1>Summer Season : {status}</h1>
              <button onClick = { () }></button>
      </div>
    </>
  );
}



// function Fragment() {
//   return (
//     <>
//       <div className="div-style">
//         <Kayak />
//         <Kids />
//       </div>
//     </>
//   );
// }

export default Fragment;
