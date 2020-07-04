import React, { Component } from 'react';

class AddTVShowPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            cast: [],
            description: '',
            seasons: '',
            releaseDate: '',
            episodes: '',
            imdbRating: '',
            image: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTVShow(this.state.formData);
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
                            <input name="name" id="name" type="text" class="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            <label for="name">TV Show Name</label>
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
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="releaseDate" id="release" type="text" class="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                            <label for="release">Release Year</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="seasons" id="seasons" type="text" class="active" value={this.state.formData.runTime} onChange={this.handleChange}/>
                            <label for="seasons">Seasons</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="episodes" id="episodes" type="text" class="active" value={this.state.formData.genre} onChange={this.handleChange}/>
                            <label for="episodes">Episodes</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="imdbRating" id="imdbRating" type="text" class="active" value={this.state.formData.imdbRating} onChange={this.handleChange}/>
                            <label for="imdbRating">IMDB Rating</label>
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
                            Add TV Show
                        </button>                           
                    </form>
                </div>
            </>
        )
    }
}

export default AddTVShowPage;