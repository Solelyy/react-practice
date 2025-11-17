import { useEffect, useState } from "react";

function AutoSaveNote() {
    const [note, setNote] = useState("");

    //show at the first load
    useEffect(() => {
        const saved = localStorage.getItem("note");
        if (saved) setNote(saved);
    }, []);

    //show every time note changes
    useEffect(() => {
        localStorage.setItem("note", note)
    }, [note]);

    return (
        <div>
            <h2>Auto-save on Local Storage Practice</h2>
            <textarea 
            name="note" 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            >
            </textarea>
        </div>
    );
}

export default AutoSaveNote;