import React from 'react';
import { Link } from 'react-router-dom';

function TVShowCard(props) {
    return(
        <>
            <div className=" card">
                <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.tvshow.image ? props.tvshow.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.tvshow.name}<i className="material-icons right">more_vert</i></span>
                <p>{props.tvshow.description}</p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.tvshow.name}<i className="material-icons right">close</i></span>
                <h6>IMDB Rating: {props.tvshow.imdbRating}</h6>
                <div>Release Year:  {props.tvshow.releaseDate}</div>
                <div>Cast: {props.tvshow.cast.join(', ')}</div>
                <div>Seasons:  {props.tvshow.seasons}</div>
                <div>Episodes:  {props.tvshow.episodes}</div>
                <p>{props.tvshow.description}</p>
                </div>
            </div>
        </>
    ) 
}

export default TVShowCard;