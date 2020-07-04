import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                    <img src={props.movie.image ? props.movie.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                    <span className="card-title">{props.movie.name}</span>
                    </div>
                    <div className="card-content">
                    <p>{props.movie.description}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    ) 
}

export default MovieCard;