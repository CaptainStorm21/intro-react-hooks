import React, { useState, useEffect } from "react";

export default function CheckboxHook() {
    const [checked, setChecked] = useState(false);

    return (
    <>
            <input type="checkbox"
                value={checked}
                onChange={  } />
            {checked ? "checked" : "not checked"}
    </>
  )
}
