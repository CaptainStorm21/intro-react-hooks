import React, { useState } from 'react'

export default function UseEffect() {
    const [val, setVal] = useState("");
        const [val, setVal] = useState("");
    return (
      <div className="blue-div">
        <label>
          Favorite Hobby:
          <input />
            </label>
            <br/>
        <label>
          Favorite Campsite:
          <input />
        </label>
      </div>
    );
}
