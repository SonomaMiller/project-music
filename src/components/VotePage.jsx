import React, { useEffect, useState } from 'react';
import songsData from '../data/song_list.json';

const VotePage = () => {
  const [songs, setSongs] = useState([]);

  // simulates loading data, if it's changed in future
  useEffect(() => {
    setSongs(songsData);
  }, []);

  // when row clicked, add one to votes
  const handleRowClick = (title) => {
    const updatedSongs = songs.map((song) => {
      if (song.title.trim().toLowerCase() === title.trim().toLowerCase()) {
        return { ...song, votes: (song.votes || 0) + 1 };
      }
      return song;
    });

    setSongs(updatedSongs);
  };

  // sort songs in json by votes
  const sortedSongs = [...songs]
    .sort((a, b) => (b.votes || 0) - (a.votes || 0))
    .slice(0, 5);

  return (
    <div>
      <section id="wrapped">
        <h2>This Week&apos;s Wrapped</h2>
        <p id="vote-confirm">Click on a song to submit a vote!</p>

        <table>
          <tbody>
            {sortedSongs.map((song, index) => (
              <tr key={index} onClick={() => handleRowClick(song.title)}>
                <td>
                  <h1>{index + 1}.</h1>
                </td>
                <td>
                  <img
                    src={song.album_cover}
                    alt={song.comment[0]}
                  />
                </td>
                <td>
                  <div className="details">
                    <h2>{song.title}</h2>
                    <h3>{song.artist}</h3>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default VotePage;