import React from 'react';
import { Navlink } from 'react-router-dom';

const NavBar = () => {
    return (
    <>
        <nav>
            <div className="nav-wrapper grey">
                <a className="left brand-log" href="/"><img src="https://fontmeme.com/permalink/200704/d43fd863a6d3e281f9704c12d58a105c.png" height='66' alt="netflix-font" border="0"/></a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/movies">All Movies</a></li>
                    <li><a href="/movies/add">Add a Movie</a></li>
                    <li><a href="/tvshows">TV Shows</a></li>
                    <li><a href="/tvshows/add">Add a TV Show</a></li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default NavBar;