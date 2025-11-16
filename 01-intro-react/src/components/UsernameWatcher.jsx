//Prace useEffect 

import { useState, useEffect } from "react";

function UsernameWatcher () {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    //Show once (mount) when the page loads
    useEffect(() => {
        console.log("No username exists yet.")
    }, []);

    //Run every time the username changes
    useEffect(() => {
        if (username === "") return;
        setMessage(`Username changed: ${username}`)
    }, [username]);

    return (
        <div>
            <h2>Username watcher: useEffect Practice</h2>
            <input type="text"
            placeholder="Type username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <p>{message}</p>
        </div>
    );
}

export default UsernameWatcher;

