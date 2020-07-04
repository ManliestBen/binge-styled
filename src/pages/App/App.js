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

  handleAddMovie = async newMovieData => {
    const newMovie = await movieAPI.create(newMovieData);
    this.setState(state => ({
      movies: [...state.movies, newMovie]
    }), () => this.props.history.push('/'));
  }

  handleAddTVShow = async newTVShowData => {
    const newTVShow = await TVShowAPI.create(newTVShowData);
    this.setState(state => ({
      tvshows: [...state.tvshows, newTVShow]
    }), () => this.props.history.push('/'));
  }

  handleDeleteMovie = async id => {
    await movieAPI.deleteOne(id);
    this.setState(state => ({
      movies: state.movies.filter(m => m._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleDeleteTVShow = async id => {
    await TVShowAPI.deleteOne(id);
    this.setState(state => ({
      tvshows: state.tvshows.filter(t => t._id !== id)
    }), () => this.props.history.push('/'));
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
        <AddMoviePage 
          handleAddMovie = {this.handleAddMovie}
        />
      }>
      </Route>
      <Route exact path='/tvshows/add' render={() => 
        <AddTVShowPage 
          handleAddTVShow = {this.handleAddTVShow}
        />
      }>
      </Route>
      <Route exact path='/movies' render={() => 
        <MovieListPage 
          movies = {this.state.movies}
          handleDeleteMovie={this.handleDeleteMovie}
        />
      }>
      </Route>
      <Route exact path='/tvshows' render={() => 
        <TVShowListPage 
          tvshows = {this.state.tvshows}
          handleDeleteTVShow={this.handleDeleteTVShow}
        />
      }>
      </Route>
      </>
    );
  }
}

export default App;
