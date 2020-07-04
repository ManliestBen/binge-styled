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