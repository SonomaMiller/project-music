import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import validator from 'validator';

import { NavigationBar } from './Nav';
import HomePage from './HomePage';
import AllSongsPage from './AllSongsPage';
import VotePage from './VotePage';
import ArchivePage from './ArchivePage';
import AddPage from './AddSongPage';
import SongPage from './SongPage';

import SONG_LIST from '../data/song_list.json';

function App(props) {
    const INITIAL_DATA = SONG_LIST;
    const [songArray, setSongArray] = useState(INITIAL_DATA);

    // Function to check if Spotify link is valid
    const isValidSpotifyLink = (link) => {
        return validator.isURL(link, {
            protocols: ['http', 'https'],
            require_protocol: true,
        }) && link.includes('spotify.com');
    };

    // Function to check if the album image is a valid file (JPEG or JPG)
    const isValidAlbumImage = (file) => {
        if (!file) return false;
        const validTypes = ['image/jpeg', 'image/jpg'];
        return validTypes.includes(file.type);
    };

    // Function for adding a new song
    const addSong = (title, artist, genre, albumFile, spotify, comment) => {
        // Validation checks
        if (!isValidSpotifyLink(spotify)) {
            alert("Invalid Spotify link");
            return;
        }
        if (albumFile && !isValidAlbumImage(albumFile)) {
            alert("Album cover must be a valid JPEG or JPG image");
            return;
        }

        // Check if the song already exists
        const songExists = songArray.some(song => song.title === title && song.artist === artist);
        if (songExists) {
            alert("This song already exists.");
            return;
        }

        // Create a new song object
        const newSongObj = {
            title: title,
            artist: artist,
            genre: [genre],
            album_cover: URL.createObjectURL(albumFile), // Generate a preview URL for the file
            spotify_link: spotify,
            comment: [comment],
            votes: 0,
            likes: 0,
        };

        // Update the song list with the new song
        const updatedSongArray = [...songArray, newSongObj];
        setSongArray(updatedSongArray);
    };

    // Like button handler
    const likeSong = (title) => {
        const updatedSongs = songArray.map((song) => {
            if (song.title === title) {
                return { ...song, likes: song.likes + 1 };
            }
            return song;
        });
        setSongArray(updatedSongs);
    };

    return (
        <div>
            <header>
                <NavigationBar />
            </header>
            <main>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/add" element={<AddPage addSongFunction={addSong} />} />
                    <Route path="/vote" element={<VotePage />} />
                    <Route path="/archive" element={<ArchivePage />} />
                    <Route path="/allsongs" element={<AllSongsPage songs={songArray} onLike={likeSong} />} />
                    <Route path="/:songTitle" element={<SongPage songs={songArray} />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </main>
            <footer>
                <p className="citing"><cite>&copy; 2024 UW Wrapped. All rights reserved.</cite></p>
                <p className="citing"><cite>All songs from Spotify by respective artists</cite></p>
            </footer>
        </div>
    );
}

export default App;
