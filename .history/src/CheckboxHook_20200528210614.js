import React, { useState, useEffect } from "react";

export default function CheckboxHook() {
    const [checked, setChecked] = useState(false);

    function toggle() {
        setChecked 
    }
    return (
    <>
            <input type="checkbox"
                value={checked}
                onChange={ toggle  } />
            {checked ? "checked" : "not checked"}
    </>
  )
}
