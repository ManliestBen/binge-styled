import React, { Component } from 'react';

class AddMoviePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            cast: [],
            description: '',
            mpaaRating: '',
            releaseDate: 0,
            runTime: 0,
            genre: '',
            imdbRating: 0,
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
                            <div className="input-field col s6">Movie Name:
                            <input name="name" id="first_name" type="text" class="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">Cast (Separate with commas):
                            <input name="cast" id="first_name" type="text" class="active" value={this.state.formData.cast} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">Description:
                            <input name="description" id="first_name" type="text" class="active" value={this.state.formData.description} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <label>MPAA Rating</label>
                        <select name="mpaaRating" className="browser-default col s12" value={this.state.formData.mpaaRating} onChange={this.handleChange}>
                            <option value="" disabled selected>Please select</option>
                            <option value="G">G</option>
                            <option value="PG">PG</option>
                            <option value="PG-13">PG-13</option>
                            <option value="R">R</option>
                            <option value="NC-17">NC-17</option>
                        </select>
                        <div className="row">
                            <div className="input-field col s6">Release Year:
                            <input name="releaseDate" id="first_name" type="text" class="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">Run-time (Min):
                            <input name="runTime" id="first_name" type="text" class="active" value={this.state.formData.runTime} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">Genre:
                            <input name="genre" id="first_name" type="text" class="active" value={this.state.formData.genre} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">IMDB Rating:
                            <input name="imdbRating" id="first_name" type="text" class="active" value={this.state.formData.imdbRating} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">Image URL:
                            <input name="image" id="first_name" type="text" class="active" value={this.state.formData.image} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn"
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