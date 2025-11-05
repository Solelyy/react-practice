import {useState} from "react";

function MoodToggle() {
    const [isHappy, setIsHappy] = useState(true);

    const toggleMood = () => {
        setIsHappy(!isHappy);
    }

    return (
        <div>
        <h2>Current Mood: {isHappy? "I'm Happy 🤗" : "I'm Sad 😢"}</h2>
        <button onClick={toggleMood}>
            Change Mood
        </button>
        </div>
    )
}

export default MoodToggle;