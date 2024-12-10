import React, { useState } from 'react';
import LikeButton from './LikeButton.jsx'; // Import the LikeButton component
import { Link } from 'react-router-dom'


function AllSongsPage(props) {
   const [selectedGenre, setSelectedGenre] = useState('all');
   const [searchQuery, setSearchQuery] = useState('');
   const [likedSongs, setLikedSongs] = useState([]); // Track liked songs


   // DATA COPY TO MANIPULATE
   const songs = props.songs || []; // added a fallback to prevent errors if props.songs is undefined


   // FILTER SONGS BASED ON SELECTED GENRE AND SEARCH QUERY
   let filteredSongs = songs;


   if (selectedGenre !== 'all') {
       filteredSongs = filteredSongs.filter((song) =>
           song.genre.includes(selectedGenre)
       );
   }


   if (searchQuery !== '') {
       filteredSongs = filteredSongs.filter((song) =>
           song.title.toLowerCase().includes(searchQuery) ||
           song.artist.toLowerCase().includes(searchQuery)
       );
   }


   // Handle like button toggle
   const handleLikeToggle = (songId) => {
       setLikedSongs((prevLikes) => {
           if (prevLikes.includes(songId)) {
               return prevLikes.filter((id) => id !== songId); // Remove if already liked
           } else {
               return [...prevLikes, songId]; // Add to liked songs
           }
       });
   };


   // Render each song element
   const songElemArray = filteredSongs.map((songObj) => {
       return (
           <tr className='songRow' key={songObj.title}>
               <td>
                   <a href={songObj.spotify_link} target='_blank' rel="noopener noreferrer">
                       <img className='allSongsImg' src={songObj.album_cover} alt={songObj.title} />
                   </a>
               </td>
               <td>
                   <div className='song-info'>
                       <h2>
                           <Link to={`/${songObj.title}`} className='song-title'>
                              {songObj.title}
                          </Link >
                       </h2>
                       <h3>{songObj.artist}</h3>
                       <div className="like-container">
                           <LikeButton
                               isLiked={likedSongs.includes(songObj.title)} // this checks if the song is liked by title
                               onClick={() => handleLikeToggle(songObj.title)} // toggle like on click
                           />
                           <p className="likes-text">Likes: {likedSongs.filter(id => id === songObj.title).length}</p>
                       </div>
                   </div>
               </td>
           </tr>
       );
   });
  


   // Handle genre filter selection
   const handleSelectedGenre = (event) => {
       setSelectedGenre(event.target.value);
   };


   // Create genre options
   const genreSet = new Set(songs.map(songObj => songObj.genre)); //TA said no need for flat here so i deleted it
   const genres = Array.from(genreSet).map((genre) => (
       <option key={genre} value={genre}>{genre}</option>
   ));


   // Handle search query input
   const handleSearch = (event) => {
       setSearchQuery(event.target.value.toLowerCase());
   };


   return (
       <section id="song-box">
           <section id='search-filter'>
               <form id='search-bar'>
                   <input
                       id='search-input'
                       type='text'
                       size='80'
                       placeholder='&#128270; Search songs'
                       value={searchQuery}
                       onChange={handleSearch}
                   />
               </form>
               <div id='filters'>
                   <div>
                       <select id='genre-filter' className='filter' value={selectedGenre} onChange={handleSelectedGenre}>
                           <option value='all'>All Genres</option>
                           {genres}
                       </select>
                   </div>
               </div>
           </section>
          
           <table>
               <thead>
               </thead>
               <tbody>
                   {/* Render filtered songs */}
                   {songElemArray}
               </tbody>
           </table>
       </section>
   );
}


export default AllSongsPage;