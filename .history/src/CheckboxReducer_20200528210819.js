import React, { useState, useEffect } from "react";

export default function CheckboxHook() {
    const [checked, setChecked] = useState(false);

    function toggle() {
        setChecked(checked => !checked);
    }
    return (
    <>
            <input type="checkbox"
                value={checked}
                onChange={ toggle  } />
            {checked ? "Checked with Hook!" : "Not Checked with Hook!"}
    </>
  )
}
