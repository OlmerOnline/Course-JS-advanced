import { comments, updateComments } from './comments.js';
import { renderComments } from './renderComments.js';
import { renderHeader } from './renderHeader.js';
import { user } from './user.js';

const host = 'https://wedev-api.sky.pro/api/v2/avrusskov-test/comments';

export function getComments() {
    fetch(host, { method: 'GET' })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            updateComments(data.comments);
            renderHeader(false);
            renderComments();
        });
}

export function getCommentsAuthorazation() {
    fetch(host, {
        method: 'GET',
        headers: { Authorization: `Bearer ${user.token}` },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            updateComments(data.comments);
            renderHeader(true);
            renderComments();
        });
}

export function postComment(newComment) {
    return fetch(host, {
        method: 'POST',
        headers: { Authorization: `Bearer ${user.token}` },
        body: JSON.stringify(newComment),
    })
        .then((responce) => {
            if (responce.status === 201) {
                return getCommentsAuthorazation();
            } else {
                if (responce.status === 400) {
                    throw new Error('400');
                }
            }
        })
        .catch((error) => {
            switch (error.message) {
                case '400':
                    alert('Имя и комментарий должны быть не короче 3 символов');
                    break;
                default:
                    alert('Кажется, у вас сломался интернет, попробуйте позже');
                    break;
            }
        });
}

export function updateLike(index) {
    fetch(`${host}/${comments[index].id}/toggle-like`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${user.token}` },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            comments[index].likes = data.result.likes;
            comments[index].isLiked = data.result.isLiked;

            renderComments();
        });
}
