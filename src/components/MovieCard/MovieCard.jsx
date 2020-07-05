import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, handleDeleteMovie}) {
    return(
        <>
            <div className=" card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img alt="movie" className="activator" src={movie.image ? movie.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{movie.name}<i className="material-icons right">more_vert</i></span>
                    <p>{movie.description}</p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{movie.name}<i className="material-icons right">close</i></span>
                    <h6>IMDB Rating: {movie.imdbRating}</h6>
                    <div>Genre:  {movie.genre}</div>
                    <div>Release Year:  {movie.releaseDate}</div>
                    <div>Cast: {movie.cast.join(', ')}</div>
                    <div>MPAA Rating:  {movie.mpaaRating}</div>
                    <p>{movie.description}</p>
                    <button type="submit" className="btn red" onClick={() => handleDeleteMovie(movie._id)}>
                    <i class="material-icons left">delete</i>    
                        Delete Movie
                    </button>
                    <Link 
                        className="btn yellow black-text"
                        to={{
                            pathname: '/edit',
                            state: {movie}
                        }}
                    ><i class="material-icons left">build</i>
                        Edit Movie
                    </Link> 
                </div>
            </div>
        </>
    ) 
}

export default MovieCard;