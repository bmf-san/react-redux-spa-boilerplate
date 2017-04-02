import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export function fetchData() {
    const request = axios.get('https://api.github.com/users/bmf-san');

    return {type: FETCH_DATA, payload: request};
}
