const BASE_URL = '/api/tvshows/'

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}

export function create(tvshow) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(tvshow)
    }, {mode: "cors"})
    .then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
    }, {mode: "cors"})
    .then(res => res.json());
}

export function update(tvshow) {
    return fetch(`${BASE_URL}${tvshow._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(tvshow)
    }, {mode: "cors"})
    .then(res => res.json());
}