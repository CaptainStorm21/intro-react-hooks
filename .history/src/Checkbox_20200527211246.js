import React, { useState } from "react";

export default function Checkbox() {
    const [checked, setChecked] = useState(false);
    
    alert (` checked: ${checked}`)
    return (
    <>
            <input type="checkbox"
                value={checked}
                onChange={ () => setChecked (checked => !checked )  } />
            {checked ? "checked" : "not checked"}
    </>
  )
}
