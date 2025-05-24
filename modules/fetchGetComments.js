import { renderComments } from './render.js';
import { updateComments } from './comments.js';

export function fetchGetComments(API) {
    return fetch(API, { method: 'GET' })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            updateComments(data.comments);
            renderComments();
        });
}
