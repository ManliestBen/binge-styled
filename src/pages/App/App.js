import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AddMoviePage from '../AddMoviePage/AddMoviePage';
import AddTVShowPage from '../AddTVShowPage/AddTVShowPage';
import MovieListPage from '../MovieListPage/MovieListPage';
import TVShowListPage from '../TVShowListPage/TVShowListPage';
import * as movieAPI from '../../services/movies-api';
import * as TVShowAPI from '../../services/tvshows-api';


class App extends Component {
  state = {
    movies: [],
    tvshows: []
  }


  async componentDidMount() {
    const movies = await movieAPI.getAll();
    this.setState({movies})
    const tvshows = await TVShowAPI.getAll();
    this.setState({tvshows}) 
  }

  render () {
    return (
      <>
      <NavBar />
      <Route exact path='/movies/add' render={() => 
        <AddMoviePage />
      }>
      </Route>
      <Route exact path='/tvshows/add' render={() => 
        <AddTVShowPage />
      }>
      </Route>
      <Route exact path='/movies' render={() => 
        <MovieListPage />
      }>
      </Route>
      <Route exact path='/tvshows' render={() => 
        <TVShowListPage />
      }>
      </Route>
      </>
    );
  }
}

export default App;
