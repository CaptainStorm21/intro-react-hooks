import React, { useReducer } from "react";

export default function CheckboxReducer() {
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
