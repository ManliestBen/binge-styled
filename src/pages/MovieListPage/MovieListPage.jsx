import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MovieListPage.css';
import NavBar from '../../components/NavBar/NavBar'

function MovieListPage(props) {
    return (
        <>
            <NavBar 
                pageName={"Movie List"}
            />
            <div className='MovieListPage-grid'>
                {props.movies.map(movie =>
                    <MovieCard 
                        key={movie._id}
                        movie={movie}
                        handleDeleteMovie={props.handleDeleteMovie}
                    />
                )}
            </div>
        </>
    );
}

export default MovieListPage;