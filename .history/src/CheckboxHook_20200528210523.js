import React, { useState, useEffect } from "react";

export default function CheckboxHook() {
    const [checked, setChecked] = useState(false);

    return (
    <>
            <input type="checkbox"
                value={checked}
                onChange={ () => setChecked (checked => !checked )  } />
            {checked ? "checked" : "not checked"}
    </>
  )
}
