import React from 'react';
import { Navlink } from 'react-router-dom';

const NavBar = () => {
    return (
    <>
        <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo" href="/"><img src="https://fontmeme.com/permalink/200704/d43fd863a6d3e281f9704c12d58a105c.png" height='66' alt="netflix-font" border="0"/></a>
                <ul id="nav-mobile" className="right">
                    <li><a className='black-text' href="/movies">All Movies</a></li>
                    <li><a className='black-text' href="/movies/add">Add a Movie</a></li>
                    <li><a className='black-text' href="/tvshows">All TV Shows</a></li>
                    <li><a className='black-text' href="/tvshows/add">Add a TV Show</a></li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default NavBar;