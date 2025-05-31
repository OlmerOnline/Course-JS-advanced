import { updateLike } from './api.js';
import { comments } from './comments.js';
import { renderComments } from './renderComments.js';
import { user } from './user.js';

export function addClickBtnLike() {
    const arrayBtnLike = document.querySelectorAll('.like-button');

    for (const btnLike of arrayBtnLike) {
        btnLike.addEventListener('click', (event) => {
            event.stopPropagation();

            if (Object.keys(user).length !== 0) {
                const index = btnLike.dataset.index;

                updateLike(comments[index].id).then((data) => {
                    comments[index].likes = data.result.likes;
                    comments[index].isLiked = data.result.isLiked;

                    renderComments();
                });
            } else {
                alert('Нужно авторизоваться');
            }
        });
    }
}

export function addClickComment() {
    const elementsComments = document.querySelectorAll('.comment');
    const inputText = document.querySelector('.add-form-text');

    for (const elementComments of elementsComments) {
        elementComments.addEventListener('click', () => {
            const index = elementComments.dataset.index;
            inputText.value = `<${comments[index].text}\n${comments[index].author.name}>`;
        });
    }
}
