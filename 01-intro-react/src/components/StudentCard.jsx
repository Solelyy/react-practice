import { useState } from "react";

function StudentCard({name= "Unkown", course= "N/A"}) {
    const [status, setStatus] = useState("Studying 📚");

    const toggleStatus = () => setStatus(status === "Studying 📚" ? "On Break ☕️" : "Studying 📚");

    return (
        <div>
            <h3>Name: {name} </h3>
            <p>Course: {course} </p>
            <p>{status}</p>
            {status === "Studying 📚" 
            ? <p>FOCUS MODE ON 🔥</p> 
            : <p>CHILLIN' 💆🏻‍♀️</p>}
            <button onClick={toggleStatus}>Change Status</button>
        </div>
    )
}

export default StudentCard;