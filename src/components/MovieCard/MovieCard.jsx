import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    return(
        <>
            <div className=" card">
                <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.movie.image ? props.movie.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.movie.name}<i className="material-icons right">more_vert</i></span>
                <p>{props.movie.description}</p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.movie.name}<i className="material-icons right">close</i></span>
                <h6>IMDB Rating: {props.movie.imdbRating}</h6>
                <div>Genre:  {props.movie.genre}</div>
                <div>Release Year:  {props.movie.releaseDate}</div>
                <div>Cast: {props.movie.cast.join(', ')}</div>
                <div>MPAA Rating:  {props.movie.mpaaRating}</div>
                <p>{props.movie.description}</p>
                </div>
            </div>
        </>
    ) 
}

export default MovieCard;