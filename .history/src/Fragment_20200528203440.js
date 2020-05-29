import React, { useState } from "react";
import "./App.css";
import Checkbox from './Checkbox'
import CheckboxHook from './CheckboxHook';
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
    const [year, setYear] = useState(2050)
    const [manager, setManager] = useState('Alexandra')
    const [status, setStatus] = useState("Open");
  return (
    <>
      <div className="checkbox-div">
        <Checkbox />
      </div>
      <div className="checkbox-div"></div>
      <CheckboxHook />
      <div>
        <h3>Manager on Site: {manager}</h3>
        <button onClick={() => setManager("Mary Anne")}>Next Manager</button>
      </div>
      <div>
        <h3>{year}</h3>
        <button onClick={() => setYear(year + 1)}>Year Update</button>
      </div>
      <div className="div-style">
        <h1>Summer Season : {status}</h1>
        <button onClick={() => setStatus("Closed")}>Closed</button>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Gone to Santa's!")}>
          Christmas!
        </button>
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
