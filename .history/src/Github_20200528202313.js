import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    if (data) {
        return (
            // <div>{JSON.stringify (data)}</div>
            <div>
                <h2>{data.login}</h2>
                <p>{data.email}</p>
                <p>{data.</p>
            </div>
        )
    }
    return null;
}
export default function Github() {
    return <GitHubUser login="moonhighway" />
}
