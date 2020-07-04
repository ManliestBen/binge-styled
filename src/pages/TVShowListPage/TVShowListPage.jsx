import React from 'react';
import TVShowCard from '../../components/TVShowCard/TVShowCard'

function TVShowListPage(props) {
    return (
        <>
            {props.tvshows.map(tvshow =>
                <TVShowCard 
                    key={tvshow._id}
                    tvshow={tvshow}
                />
            )}
        </>
    );
}

export default TVShowListPage;