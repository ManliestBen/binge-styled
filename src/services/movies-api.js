const BASE_URL = '/api/movies/'

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}

export function create(movie) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(movie)
    }, {mode: "cors"})
    .then(res => res.json());
}