import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import authService from '../../services/authService';

class Login extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="Login">
        <h3>Log In</h3>
        <form className="col s12" autoComplete="off" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s12">
              <input type="text" autoComplete="off" id="email" className="active" value={this.state.email} name="email" onChange={this.handleChange} />
              <label htmlFor="email">Email</label>

            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" autoComplete="off" className="active" id="password" value={this.state.pw} name="pw" onChange={this.handleChange} />
              <label htmlFor="password">Password</label>

            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn green">Log In<i className="material-icons right">arrow_forward</i></button>&nbsp;&nbsp;&nbsp;
              <Link className="btn red" to='/'>Cancel<i className="material-icons right">cancel</i></Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
