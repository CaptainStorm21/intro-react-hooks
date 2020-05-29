import React, { useState, useEffect } from "react";

export default function CheckboxHook() {
    const [checked, setChecked] = useState(false);

    function toggle() {
        setChecked (checked => )
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
