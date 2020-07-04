import React from 'react';
import { Link } from 'react-router-dom';

function TVShowCard(props) {
    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                <div className="card">
                    <span className="card-title">{props.tvshow.name}</span>
                    <div className="card-image">
                    <img src={props.tvshow.image ? props.tvshow.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                    </div>
                    <div className="card-content">
                    <p>{props.tvshow.description}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    ) 
}

export default TVShowCard;