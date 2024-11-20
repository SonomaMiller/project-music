const HomePage = () => {
    return (
        <body>
            <section id="wrapped">
                <h2>This Week&apos;s Wrapped</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h1>1.</h1>
                            </td>
                            <td>
                                <a href="https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF?si=bATdE8JzQzaWCHtUJAbVlg"
                                    target="_blank">
                                    <img src="/img/chromakopia.jpeg" alt="Album cover of a masked man in black and white" /></a>
                            </td>
                            <td>
                                <div className="details">
                                    <h2>ST. CHROMA</h2>
                                    <h3>Tyler, the Creator</h3>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>2.</h1>
                            </td>
                            <td>
                                <a href="https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed?si=60a6a68dbc4b43eb" target="_blank">
                                    <img src="/img/currents.jpg" alt="Album cover of a marble in stripey water" /></a>
                            </td>
                            <td>
                                <div className="details">
                                    <h2>Let It Happen</h2>
                                    <h3>Tame Impala</h3>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>3.</h1>
                            </td>
                            <td>
                                <a href="https://open.spotify.com/track/11LmqTE2naFULdEP94AUBa?si=5bc0610a26d3414f" target="_blank">
                                    <img src="/img/utero.jpg" alt="Album cover of human anatomy with wings" /></a>
                            </td>
                            <td>
                                <div className="details">
                                    <h2>Heart-Shaped Box</h2>
                                    <h3>Nirvana</h3>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>4.</h1>
                            </td>
                            <td>
                                <a href="https://open.spotify.com/track/7C2bncZ2xUWmAIsfeukLhG?si=c5df6f10c78249fa" target="_blank">
                                    <img src="/img/circles.jpg" alt="Album cover of a person on a rocky beach" /></a>
                            </td>
                            <td>
                                <div className="details">
                                    <h2>It Gets Easier</h2>
                                    <h3>Tanukichan</h3>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>5.</h1>
                            </td>
                            <td>
                                <a href="https://open.spotify.com/track/2lwwrWVKdf3LR9lbbhnr6R?si=aed53a5c14b947a8" target="_blank">
                                    <img src="/img/modest.jpg" alt="album cover of an arrow shooting blue wall" /></a>
                            </td>
                            <td>
                                <div className="details">
                                    <h2>Float On</h2>
                                    <h3>Modest Mouse</h3>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div id="button">
                <a href="add.html"><button>Add a Song</button></a>
            </div>

            <section id="about">
                <h2>About</h2>
                <section id="content">
                    <p>
                        This website is a compilation of what UW students are listening to this week!
                        Songs are added through the &lsquo;Add a Song&rsquo; page, and students can view past wraps
                        through the &lsquo;Archive&rsquo; button.
                    </p>
                </section>
            </section>
        </body>
    )
}

export default HomePage;