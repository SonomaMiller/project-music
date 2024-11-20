import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { NavigationBar } from './Nav'
import HomePage from './HomePage'
import AllSongsPage from './AllSongsPage'
import VotePage from './VotePage'
import ArchivePage from './ArchivePage'
import AddPage from './AddSongPage'

import SONG_LIST from '../data/song_list.json'


function App() {
  const INITIAL_DATA = SONG_LIST;
  const [songArray, setSongArray] = useState(INITIAL_DATA);

  const addSong = (title, artist, genre, image, spotify, comment) => {
    const newSongObj = {
      title: title,
      artist: artist,
      genre: [genre],
      album_cover: image,
      spotify_link: spotify,
      comment: [comment]
    };
    const updatedSongArray = [...songArray, newSongObj];
    setSongArray(updatedSongArray);
    };

  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<AddPage addSongFunction={addSong}/>} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/archive" element={<ArchivePage />}/>
          <Route path="/allsongs" element={<AllSongsPage songs={songArray}/>}/>
          <Route path="*" element={<Navigate to="/home" />}/>
        </Routes>
      </main>
      <footer>
        <p className="citing"><cite>&copy; 2024 UW Wrapped. All rights reserved.</cite></p>
        <p className="citing"><cite>All songs from Spotify by respective artists</cite></p>
      </footer>
    </div>

  )
}

export default App
