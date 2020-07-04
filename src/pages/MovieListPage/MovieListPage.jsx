import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard'

function MovieListPage(props) {
    return (
        <>
            {props.movies.map(movie =>
                <MovieCard 
                    key={movie._id}
                    movie={movie}
                />
            )}
        </>
    );
}

export default MovieListPage;