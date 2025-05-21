import { updateComments } from './modules/comments.js';
import { renderComments } from './modules/render.js';
import { addClickBtnAddComment } from './modules/eventsBtnAddComment.js';

const API = 'https://wedev-api.sky.pro/api/v1/arusskov/comments';

fetch(API, { method: 'GET' })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        updateComments(data.comments);
        renderComments();
    });

addClickBtnAddComment(API);
