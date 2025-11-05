import { useState } from "react";

function ActionPanel () {
    const [message, setMessage] = useState("Click a button!");

    const handleHello = () => setMessage("Hello there!");
    const handleBye = () => setMessage("Good bye!");
    const handleReset = () => setMessage("Click a button.");

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={handleHello}>Say Hello</button>
            <button onClick={handleBye}>Say Bye</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default ActionPanel;