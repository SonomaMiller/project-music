import React, { useState } from 'react';
import validator from 'validator';

function AddPage(props) {
    const { addSongFunction } = props;

    // Controlled form state variables
    const [titleValue, setTitleValue] = useState('');
    const [artistValue, setArtistValue] = useState('');
    const [genreValue, setGenreValue] = useState('');
    const [albumFile, setAlbumFile] = useState(null); // Store the File object for the album cover
    const [spotifyValue, setSpotifyValue] = useState('');
    const [commentValue, setCommentValue] = useState('');

    // Validation function for Spotify links
    const isValidSpotifyLink = (link) => {
        return validator.isURL(link, {
            protocols: ['http', 'https'],
            require_protocol: true,
        }) && link.includes('spotify.com');
    };

    // Validation function for album images
    const isValidAlbumImage = (file) => {
        if (!file) return false;
        const validTypes = ['image/jpeg', 'image/jpg'];
        return validTypes.includes(file.type);
    };

    // Handlers for controlled form inputs
    const handleTitleChange = (event) => setTitleValue(event.target.value);
    const handleArtistChange = (event) => setArtistValue(event.target.value);
    const handleGenreChange = (event) => setGenreValue(event.target.value);
    const handleSpotifyChange = (event) => setSpotifyValue(event.target.value);
    const handleCommentChange = (event) => setCommentValue(event.target.value);

    // Special handler for the album cover file input
    const handleAlbumChange = (event) => {
        const file = event.target.files[0]; // Get the first file from the input
        setAlbumFile(file); // Store the file in state
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate inputs
        if (!isValidSpotifyLink(spotifyValue)) {
            alert("Invalid Spotify link");
            return;
        }
        if (albumFile && !isValidAlbumImage(albumFile)) {
            alert("Album cover must be a valid JPEG or JPG image");
            return;
        }

        // Add the song using the passed-in function
        addSongFunction(
            titleValue,
            artistValue,
            genreValue,
            albumFile, // Pass the File object to the function
            spotifyValue,
            commentValue
        );

        // Reset the form
        setTitleValue('');
        setArtistValue('');
        setGenreValue('');
        setAlbumFile(null);
        setSpotifyValue('');
        setCommentValue('');
    };

    return (
        <div>
            <section id="add_song">
                <h1>Add a Song</h1>
                <form id="song_form" onSubmit={handleSubmit}>
                    <div className="form_section">
                        <label htmlFor="song_title">Song Title</label>
                        <input
                            className="form-control"
                            id="song_title"
                            name="song"
                            onChange={handleTitleChange}
                            value={titleValue}
                            required
                        />
                    </div>
                    <div className="form_section">
                        <label htmlFor="artist_name">Artist</label>
                        <input
                            className="form-control"
                            id="artist_name"
                            name="artist"
                            onChange={handleArtistChange}
                            value={artistValue}
                            required
                        />
                    </div>
                    <div className="form_section">
                        <label htmlFor="genre_name">Genre</label>
                        <input
                            className="form-control"
                            id="genre_name"
                            name="genre"
                            onChange={handleGenreChange}
                            value={genreValue}
                            required
                        />
                    </div>
                    <div className="form_section">
                        <label htmlFor="album_cover">Album Cover</label>
                        <input
                            className="form-control"
                            id="album_cover"
                            name="album"
                            type="file"
                            accept="image/*"
                            onChange={handleAlbumChange}
                            required
                        />
                    </div>
                    <div className="form_section">
                        <label htmlFor="spotify_link">Spotify Link</label>
                        <input
                            className="form-control"
                            id="spotify_link"
                            name="spotify"
                            onChange={handleSpotifyChange}
                            value={spotifyValue}
                            required
                        />
                    </div>
                    <div className="form_section">
                        <label htmlFor="comment_form">Comment</label>
                        <textarea
                            className="form-control"
                            id="comment_form"
                            name="comment"
                            onChange={handleCommentChange}
                            value={commentValue}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default AddPage;
