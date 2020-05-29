import React, { useState } from 'react'

export default function UseEffect() {
    const [val, setVal] = useState("");
        const [val2, setVal2] = useState("");
    return (
      <div className="blue-div">
        <label>
          Favorite Hobby:
          <input value={val} onChange={(e) => setVal(e.target.value)} />
        </label>
        <br />
        <label>
          Favorite Campsite:
          <input value={val2} onChange={(e) => setVal2(e.)} />
        </label>
      </div>
    );
}
