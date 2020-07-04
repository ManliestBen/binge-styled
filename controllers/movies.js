const Movie = require('../models/movie');

module.exports = {
    create,
    index,
    delete: deleteOne,
    show,
    update
}

function create(req, res) {
    Movie.create(req.body)
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Movie.find({})
    .then(movies => {res.json(movies)})
    .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
    Movie.findByIdAndDelete(req.params.id)
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
    Movie.findById(req.params.id)
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}