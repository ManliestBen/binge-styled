const BASE_URL = '/api/tvshows/'

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}