import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AddMovie from '../AddMovie/AddMovie';
import AddTVShow from '../AddTVShow/AddTVShow';
import MovieList from '../MovieList/MovieList';
import TVShowList from '../TVShowList/TVShowList';
import * as movieAPI from '../../services/movies-api';
import * as TVShowAPI from '../../services/tvshows-api';
import EditMovie from '../EditMovie/EditMovie';
import EditTVShow from '../EditTVShow/EditTVShow';
import Search from '../Search/Search';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import authService from '../../services/authService';
import Users from '../Users/Users'

class App extends Component {
  state = {
    movies: [],
    tvshows: [],
    user: authService.getUser()
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: authService.getUser()});
  }
  
  handleAddMovie = async newMovieData => {
    const newMovie = await movieAPI.create(newMovieData);
    this.setState(state => ({
      movies: [...state.movies, newMovie]
    }), () => this.props.history.push('/movies'));
  }

  handleAddTVShow = async newTVShowData => {
    const newTVShow = await TVShowAPI.create(newTVShowData);
    this.setState(state => ({
      tvshows: [...state.tvshows, newTVShow]
    }), () => this.props.history.push('/tvshows'));
  }

  handleDeleteMovie = async id => {
    if(authService.getUser()){
      await movieAPI.deleteOne(id);
      this.setState(state => ({
        movies: state.movies.filter(m => m._id !== id)
      }), () => this.props.history.push('/movies'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleDeleteTVShow = async id => {
    if(authService.getUser()){
      await TVShowAPI.deleteOne(id);
      this.setState(state => ({
        tvshows: state.tvshows.filter(t => t._id !== id)
      }), () => this.props.history.push('/tvshows'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleUpdateMovie = async updatedMovieData => {
    const updatedMovie = await movieAPI.update(updatedMovieData);
    const newMoviesArray = this.state.movies.map(m => 
      m._id === updatedMovie._id ? updatedMovie : m
    );
    this.setState(
      {movies: newMoviesArray},
      () => this.props.history.push('/movies')
    );
  }

  handleUpdateTVShow = async updatedTVShowData => {
    const updatedTVShow = await TVShowAPI.update(updatedTVShowData);
    const newTVShowsArray = this.state.tvshows.map(t => 
      t._id === updatedTVShow._id ? updatedTVShow : t
    );
    this.setState(
      {tvshows: newTVShowsArray},
      () => this.props.history.push('/tvshows')
    );
  }

  async componentDidMount() {
    const movies = await movieAPI.getAll();
    const tvshows = await TVShowAPI.getAll();
    this.setState({movies, tvshows})
  }

  render () {
    return (
      <>

      <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
      <Route exact path='/' render={() =>
        <Landing />
      }>

      </Route>
      <Route exact path='/movies/add' render={() => 
        authService.getUser() ?
          <AddMovie 
            handleAddMovie = {this.handleAddMovie}
            user={this.state.user}
          />
        :
          <Redirect to='/login' />
      }>
      </Route>
      <Route exact path='/tvshows/add' render={() => 
        authService.getUser() ?
          <AddTVShow 
            handleAddTVShow = {this.handleAddTVShow}
            user={this.state.user}
          />
        :
          <Redirect to='/login' />
      }>
      </Route>
      <Route exact path='/movies' render={() => 
        <MovieList 
          movies = {this.state.movies}
          user={this.state.user}
          handleDeleteMovie={this.handleDeleteMovie}
        />
      }>
      </Route>
      <Route exact path='/tvshows' render={() => 
        <TVShowList 
          tvshows = {this.state.tvshows}
          user={this.state.user}
          handleDeleteTVShow={this.handleDeleteTVShow}
        />
      }>
      </Route>
      <Route exact path='/edit' render={({location}) => 
        authService.getUser() ?
          <EditMovie
            handleUpdateMovie={this.handleUpdateMovie}
            location={location}
            user={this.state.user}
          />
        :
          <Redirect to='/login'/>
      } />
      <Route exact path='/editTV' render={({location}) => 
        authService.getUser() ?
          <EditTVShow
            handleUpdateTVShow={this.handleUpdateTVShow}
            location={location}
            user={this.state.user}
          />
        :
          <Redirect to='/login' />
      } />
      <Route exact path='/search' render={({location}) => 
        <Search
          location={location}
          user={this.state.user}
        />
      } />
      <Route exact path='/signup' render={({ history }) => 
        <Signup
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      <Route exact path='/login' render={({ history }) => 
        <Login
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      <Route exact path='/users' render={({ history }) => 
        <Users
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
          user={this.state.user}
        />
    }/>
      </>
    );
  }
}

export default App;
