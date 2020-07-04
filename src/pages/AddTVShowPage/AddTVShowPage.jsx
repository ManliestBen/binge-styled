import React, { Component } from 'react';

class AddTVShowPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            cast: [],
            description: '',
            seasons: 1,
            releaseDate: 0,
            episodes: 1,
            imdbRating: 0,
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
                            <div className="input-field col s6">TV Show Name:
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
                        <div className="row">
                            <div className="input-field col s6">Release Year:
                            <input name="releaseDate" id="first_name" type="text" class="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">Seasons:
                            <input name="seasons" id="first_name" type="text" class="active" value={this.state.formData.runTime} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">Episodes:
                            <input name="episodes" id="first_name" type="text" class="active" value={this.state.formData.genre} onChange={this.handleChange}/>
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
                            Add TV Show
                        </button>                           
                    </form>
                </div>
            </>
        )
    }
}

export default AddTVShowPage;