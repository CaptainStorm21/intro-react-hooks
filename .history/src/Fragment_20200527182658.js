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
    const [manager, setManager] = useState('Alexandra')
    const [status, setStatus] = useState("Open");
  return (
      <>
          <div>
              <h3>Manager on Site: {manager}</h3>
              <button>Chang</button>
          </div>
      <div className="div-style">
        <h1>Summer Season : {status}</h1>
        <button onClick={() => setStatus("Closed")}>Closed</button>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Gone to Santa's!")}>Christmas!</button>
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
