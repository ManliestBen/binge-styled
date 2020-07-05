import React from 'react';
import { Link } from 'react-router-dom';

function TVShowCard({ tvshow, handleDeleteTVShow }) {
    return(
        <>
            <div className=" card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={tvshow.image ? tvshow.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{tvshow.name}<i className="material-icons right">more_vert</i></span>
                    <p>{tvshow.description}</p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{tvshow.name}<i className="material-icons right">close</i></span>
                    <h6>IMDB Rating: {tvshow.imdbRating}</h6>
                    <div>Release Year:  {tvshow.releaseDate}</div>
                    <div>Cast: {tvshow.cast.join(', ')}</div>
                    <div>Seasons:  {tvshow.seasons}</div>
                    <div>Episodes:  {tvshow.episodes}</div>
                    <p>{tvshow.description}</p>
                    <button type="submit" className="btn red" onClick={() => handleDeleteTVShow(tvshow._id)}>
                        Delete TV Show
                    </button>
                    <Link 
                        className="btn yellow black-text"
                        to={{
                            pathname: '/editTV',
                            state: {tvshow}
                        }}
                    >
                        Edit TV Show
                    </Link>
                </div>
            </div>
        </>
    ) 
}

export default TVShowCard;