// import React from 'react';

const ArchivePage = () => {
    return (
        <div>
            <section id="albums">
                <div className="album-box">
                    <img
                        src="img/intimidated-KAYTRANADA.jpeg"
                        alt="Album cover for Week of 10/13-10-19"
                    />
                    <div className="album-details">
                        <h3>Week of</h3>
                        <p className="week">10/13-10/19</p>
                    </div>
                </div>

                <div className="album-box">
                    <img
                        src="img/thepartyandafter-theweeknd.jpeg"
                        alt="Album cover for Week of 10/12-10/16"
                    />
                    <div className="album-details">
                        <h3>Week of</h3>
                        <p className="week">10/12-10/16</p>
                    </div>
                </div>

                <div className="album-box">
                    <img
                        src="img/nopole-dontoliver.jpeg"
                        alt="Album cover for Week of 10/20-10/26"
                    />
                    <div className="album-details">
                        <h3>Week of</h3>
                        <p className="week">10/20-10/26</p>
                    </div>
                </div>

                <div className="album-box">
                    <img
                        src="img/wastemytime-essosa.jpeg"
                        alt="Album cover for Week of 10/27-11/02"
                    />
                    <div className="album-details">
                        <h3>Week of</h3>
                        <p className="week">10/27-11/02</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArchivePage;