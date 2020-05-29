import React, { useState } from 'react'

export default function UseEffect() {
    const [val, setVal] = useState("");
        const [val2, setVal2] = useState("");
    return (
      <div className="blue-div">
        <label>
          Favorite Hobby:
          <input value={val} />
        </label>
        <br />
        <label>
          Favorite Campsite:
          <input value={val} onChange={ e=} />
        </label>
      </div>
    );
}
