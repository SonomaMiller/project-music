import { NavLink } from 'react-router-dom';
import songsData from '../data/song_list.json';

// sort songs in json by votes
const sortedSongs = songsData
  .sort((a, b) => b.votes - a.votes)
  .slice(0, 5);

const HomePage = () => {
  return (
    <div>
      <section id="wrapped">
        <h2>This Week&apos;s Wrapped</h2>

        <table>
          <tbody>
            {sortedSongs.map((song, index) => (
              <tr key={index}>
                <td>
                  <h1>{index + 1}.</h1>
                </td>
                <td>
                  <a
                    href={song.spotify_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={song.album_cover}
                      alt={song.comment[0]}
                    />
                  </a>
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

      <section>
        <div id="button">
          <NavLink to="/add">
            <button>Add a Song</button>
          </NavLink>
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <section id="content">
          <p>
            This website is a compilation of what UW students are listening to this week!
            Songs are added through the &apos;Add a Song&apos; page, and students can view past wraps
            through the &apos;Archive&apos; button.
          </p>
        </section>
      </section>
    </div>
  );
};

export default HomePage;