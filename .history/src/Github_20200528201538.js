import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${logis}`)
    }
}

export default function Github() {
    return (
        <div>
            
        </div>
    )
}
