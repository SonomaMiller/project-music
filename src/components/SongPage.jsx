import React from 'react'
import { useParams } from'react-router-dom'


function SongPage(props) {
   const songs = props.songs;
   const { songTitle } = useParams();
   const songTitleString = songTitle;
 
   let song = songs.find((s) => s.title == songTitleString);
   if(!song) return <h2>No song specified</h2>
 
   return (
       <section id="song_details">
           <div id="details_section">
               <a href={song.spotify_link} target='_blank' rel="noopener noreferrer">
                   <img src={song.album_cover} alt={song.title} />
               </a>
               <div id="song_info">
                   <h1> {song.title} </h1>
                   <h2> {song.artist} </h2>
                   <h3> {song.genre} </h3>
               </div>
           </div>
           <div>
               <h3>Comments</h3>
               <p>{song.comment}</p>
           </div>
       </ section>
      
   )
}
export default SongPage;