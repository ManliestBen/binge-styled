import React from 'react';

const NavBar = ({ pageName }) => {
    return (
    <>
        <nav>
            <div className="nav-wrapper">
                <a className=" left" href="/"><img src="https://fontmeme.com/permalink/200705/e2371cf438042048aa22fb9341eadbba.png" height='66' alt="netflix-font" border="0"/></a>
                    <h5 className="left page-name brand-logo">{pageName}</h5>
                <ul id="nav-mobile" className="right">
                    <li><a className="nav-link" href="/movies">All Movies</a></li>
                    <li><a href="/movies"><i className="material-icons left small">movie</i></a></li>
                    <li><a className="nav-link-b" href="/movies/add">Add a Movie</a></li>
                    <li><a href="/movies/add"><i className="material-icons left small">add movie</i></a></li>
                    <li><a className="nav-link" href="/tvshows">All TV Shows</a></li>
                    <li><a href="/tvshows"><i className="material-icons left small">tv</i></a></li>
                    <li><a className="nav-link-b" href="/tvshows/add">Add a TV Show</a></li>
                    <li><a href="/tvshows/add"><i className="material-icons left small">add tv</i></a></li>
                    {/* <li><a className="nav-link-b" href="/search">Search</a></li><i className="material-icons left small">search</i> */}
                </ul>
            </div>
        </nav>
    </>
    )
}

export default NavBar;