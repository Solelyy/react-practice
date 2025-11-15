//Prace useEffect 

import { useState, useEffect } from "react";

function UsernameWatcher () {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("No username exists yet.")
    }, []);

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

