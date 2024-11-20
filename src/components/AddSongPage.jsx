import /* React, */ { useState } from 'react';

function AddPage(props) {
    const { addSongFunction } = props;

    {/* Making the form controlled */}
    const [titleValue, setTitleValue] = useState('');
    const [artistValue, setArtistValue] = useState('');
    const [genreValue, setGenreValue] = useState('');
    const [albumValue, setAlbumValue] = useState('');
    const [spotifyValue, setSpotifyValue] = useState('');
    const [commentValue, setCommentValue] = useState('');

    const handleTitleChange = (event) => {
        let newTitle = event.target.value;
        setTitleValue(newTitle);
    }
    const handleArtistChange = (event) => {
        let newArtist = event.target.value;
        setArtistValue(newArtist);
    }
    const handleGenreChange = (event) => {
        let newGenre = event.target.value;
        setGenreValue(newGenre);
    }
    const handleAlbumChange = (event) => {
        let newAlbum = event.target.value;
        setAlbumValue(newAlbum);
    }
    const handleSpotifyChange = (event) => {
        let newSpotify = event.target.value;
        setSpotifyValue(newSpotify);
    }
    const handleCommentChange = (event) => {
        let newComment = event.target.value;
        setCommentValue(newComment);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addSongFunction(titleValue, artistValue, genreValue,
            albumValue, spotifyValue, commentValue)
        setTitleValue('');
        setArtistValue('');
        setGenreValue('');
        setAlbumValue('');
        setSpotifyValue('');
        setCommentValue('');
    }

    return (
        <div>
            <section id="add_song">
                <h1>Add a Song</h1>
                <form id="song_form" onSubmit={handleSubmit}>
                    <div className="form_section">
                        <label htmlFor="song_title">Song Title</label>
                        <input className="form-control" id="song_title" name="song"
                        onChange={handleTitleChange} value={titleValue} required />
                    </div>
                    <div className="form_section">
                        <label htmlFor="artist_name">Artist</label>
                        <input className="form-control" id="artist_name" name="artist"
                        onChange={handleArtistChange} value={artistValue} required />
                    </div>
                    <div className="form_section">
                        <label htmlFor="genre_name">Genre</label>
                        <input className="form-control" id="genre_name" name="genre"
                        onChange={handleGenreChange} value={genreValue} required />
                    </div>
                    <div className="form_section">
                        <label htmlFor="album_cover">Album Cover</label>
                        <input className="form-control" id="album_cover" name="album"
                        onChange={handleAlbumChange} value={albumValue} required />
                    </div>
                    <div className="form_section">
                        <label htmlFor="spotify_link">Spotify Link</label>
                        <input className="form-control" id="spotify_link" name="spotify"
                        onChange={handleSpotifyChange} value={spotifyValue} required />
                    </div>
                    <div className="form_section">
                        <label htmlFor="comment_form">Comment</label>
                        <textarea className="form-control" id="comment_form" name="comment"
                        onChange={handleCommentChange} value={commentValue} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    )}

export default AddPage;