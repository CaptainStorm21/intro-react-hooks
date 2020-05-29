import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then
    })
}

export default function Github() {
    return (
        <div>
            <GitHubUser login="moonhighway" />
        </div>
    )
}
