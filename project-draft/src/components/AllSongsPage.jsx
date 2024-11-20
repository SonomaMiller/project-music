import React from 'react';

function AllSongsPage(props) {
    const songs = props.songs;
    const songElemArray = songs.map((songObj) => {
        const elem = (
            <li key={songObj.artist + '-' + songObj.title}>
                <a href={songObj.spotify_link}>{songObj.artist + ' - ' + songObj.title}</a>    
            </li>
        );
        return elem;
    });

    return (
        <div>
            <h3>All Songs</h3>
            <ul>{songElemArray}</ul>
        </div>
    );
}

export default AllSongsPage;
