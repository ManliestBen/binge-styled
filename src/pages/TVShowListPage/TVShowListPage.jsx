import React from 'react';
import TVShowCard from '../../components/TVShowCard/TVShowCard'
import './TVShowListPage.css';

function TVShowListPage(props) {
    return (
        <>
            <div className='TVShowListPage-grid'>
                {props.tvshows.map(tvshow =>
                    <TVShowCard 
                        key={tvshow._id}
                        tvshow={tvshow}
                        handleDeleteTVShow={props.handleDeleteTVShow}
                    />
                )}
            </div>
        </>
    );
}

export default TVShowListPage;