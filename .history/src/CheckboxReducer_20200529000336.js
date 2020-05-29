import React, { useReducer } from "react";

export default function CheckboxReducer() {
    const [checked, toggle] = useReducer(false);

    function toggle() {
        setChecked();
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
