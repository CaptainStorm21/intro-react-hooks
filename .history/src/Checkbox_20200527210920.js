import React, { useState } from "react";

export default function Checkbox() {
        const [checked, setChecked] = useState(false);
    return (
    <>
            <input type="checkbox" value={checked}
                onChange={/>
            {checked ? "checked" : "not checked"}
    </>
  )
}
