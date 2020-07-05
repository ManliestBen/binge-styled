import React from 'react';
import TVShowCard from '../../components/TVShowCard/TVShowCard'
import './TVShowListPage.css';
import NavBar from '../../components/NavBar/NavBar';

function TVShowListPage(props) {
    return (
        <>
            <NavBar 
                pageName={"TV Show List"}
            />
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