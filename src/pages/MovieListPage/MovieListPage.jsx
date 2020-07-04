import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MovieListPage.css';

function MovieListPage(props) {
    return (
        <>
            <div className='MovieListPage-grid'>
                {props.movies.map(movie =>
                    <MovieCard 
                        key={movie._id}
                        movie={movie}
                    />
                )}
            </div>
        </>
    );
}

export default MovieListPage;