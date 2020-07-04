const BASE_URL = '/api/movies/'

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}