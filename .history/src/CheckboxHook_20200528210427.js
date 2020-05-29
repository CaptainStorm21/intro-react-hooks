import React, { useState, useEffect } from "react";

export default function CheckboxHook() {

    return (
    <>
            <input type="checkbox"/>
            {checked ? "checked" : "not checked"}
    </>
  )
}
