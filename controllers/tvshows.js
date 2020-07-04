const Tvshow = require('../models/tvshow');

module.exports = {
    index,
    create, 
    show,
    update,
    delete: deleteOne
}

function index(req, res) {
    Tvshow.find({})
    .then(tvshows => {res.json(tvshows)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
    Tvshow.findById(req.params.id)
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}

function create(req, res) {
    Tvshow.create(req.body)
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Tvshow.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
    Tvshow.findByIdAndDelete(req.params.id)
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}