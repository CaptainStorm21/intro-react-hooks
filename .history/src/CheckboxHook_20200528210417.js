import React, { useState, useEffect } from "react";

export default function CheckboxHook() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        alert(` checked: ${checked.toString()}`);
    });
    return (
    <>
            <input type="checkbox"/>
            {checked ? "checked" : "not checked"}
    </>
  )
}
