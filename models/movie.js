const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cast: {
        type: [String],
        required: true
    },
    description: {
        type: String
    },
    mpaaRating: {
        type: String
    },
    releaseDate: {
        type: Number
    },
    runTime: {
        type: Number
    },
    genre: {
        type: String
    },
    imdbRating: {
        type: Number
    }

}, { timestamps: true })

module.exports = mongoose.model('Movie', movieSchema);

