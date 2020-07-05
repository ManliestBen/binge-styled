import React from 'react';

const NavBar = ({ pageName }) => {
    return (
    <>
        <nav>
            <div className="nav-wrapper">
                <a className=" left brand-logo" href="/"><img src="https://fontmeme.com/permalink/200705/e2371cf438042048aa22fb9341eadbba.png" height='66' alt="netflix-font" border="0"/></a>
                <ul id="nav-mobile" className="right">
                    <h5 className="center brand-logo">{pageName}</h5>
                    <li><a href="/movies">All Movies</a></li>
                    <li><a href="/movies/add">Add a Movie</a></li>
                    <li><a href="/tvshows">All TV Shows</a></li>
                    <li><a href="/tvshows/add">Add a TV Show</a></li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default NavBar;