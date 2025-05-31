import { user } from './user.js';

const host = 'https://wedev-api.sky.pro/api/v2/avrusskov-test/comments';

export function getComments() {
    return fetch(host, { method: 'GET' }).then((response) => {
        return response.json();
    });
}

export function getCommentsAuthorazation() {
    return fetch(host, {
        method: 'GET',
        headers: { Authorization: `Bearer ${user.token}` },
    }).then((response) => {
        return response.json();
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
                return;
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

export function updateLike(id) {
    return fetch(`${host}/${id}/toggle-like`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${user.token}` },
    }).then((response) => {
        return response.json();
    });
}
