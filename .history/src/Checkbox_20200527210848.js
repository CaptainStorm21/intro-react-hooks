import React, { useState } from "react";

export default function Checkbox() {
        const [checked, setChecked] = useState(true);
    return (
    <>
            <input type="checkbox" value={checked} />
            {checked ? "checked" : "not checked"}
    </>
  )
}
