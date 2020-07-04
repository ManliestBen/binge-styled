import React, { Component } from 'react';

class AddMoviePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            cast: [],
            description: '',
            mpaaRating: '',
            releaseDate: '',
            runTime: '',
            genre: '',
            imdbRating: '',
            image: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddMovie(this.state.formData);
      };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
    };


    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="name" id="movie_name" type="text" class="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            <label for="movie_name">Movie Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="cast" id="cast" type="text" class="active" value={this.state.formData.cast} onChange={this.handleChange} required/>
                            <label for="cast">Cast (Separate with commas)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="description" id="description" type="text" class="active" value={this.state.formData.description} onChange={this.handleChange}/>
                            <label for="description">Description</label>
                            </div>
                        </div>
                        <div><label>MPAA Rating</label>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="G" onChange={this.handleChange} type="radio"/>
                                    <span>G</span>
                                </label>
                            </p>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="PG" onChange={this.handleChange} type="radio"/>
                                    <span>PG</span>
                                </label>
                            </p>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="PG-13" onChange={this.handleChange} type="radio"/>
                                    <span>PG-13</span>
                                </label>
                            </p>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="R" onChange={this.handleChange} type="radio"/>
                                    <span>R</span>
                                </label>
                            </p>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="NC-17" onChange={this.handleChange} type="radio"/>
                                    <span>NC-17</span>
                                </label>
                            </p>
                        </div>

{/* 
                        <label>MPAA Rating</label>
                        <select name="mpaaRating" className="browser-default col s12" value={this.state.formData.mpaaRating} onChange={this.handleChange}>
                            <option value="" disabled selected>Please select</option>
                            <option value="G">G</option>
                            <option value="PG">PG</option>
                            <option value="PG-13">PG-13</option>
                            <option value="R">R</option>
                            <option value="NC-17">NC-17</option>
                        </select> */}
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="releaseDate" id="release" type="text" class="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                            <label for="release">Release Year</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="runTime" id="runtime" type="text" class="active" value={this.state.formData.runTime} onChange={this.handleChange}/>
                            <label for="runtime">Run-time (Min)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="genre" id="genre" type="text" class="active" value={this.state.formData.genre} onChange={this.handleChange}/>
                            <label for="genre">Genre</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="imdbRating" id="imdb" type="text" class="active" value={this.state.formData.imdbRating} onChange={this.handleChange}/>
                            <label for="imdb">IMDB Rating</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="image" id="imageURL" type="text" class="active" value={this.state.formData.image} onChange={this.handleChange}/>
                            <label for="imageURL">Image URL</label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn red"
                            disabled={this.state.invalidForm}
                        >
                            Add Movie
                        </button>                           
                    </form>
                </div>
            </>
        )
    }
}

export default AddMoviePage;