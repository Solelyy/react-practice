import {useState} from "react";

function FaveSong() {
    const songs = ['All too Well', 'August', 'Welcome to New York'];
    const [selectedSong, setSelectedSong] = useState('');

    const showDetails = (song) => {
        setSelectedSong(`Nice taste! I love ${song} too! 🥰`);
    };

    return (
        <div>
            <h2>My Favorite Song</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} onClick={() => showDetails(song)}>
                        {song}
                    </li>
                ))}
            </ul>

            <p>{selectedSong}</p>
        </div>
    );
}

export default FaveSong;