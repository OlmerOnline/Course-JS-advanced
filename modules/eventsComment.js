import { renderComments } from './render.js';
import { comments } from './comments.js';

function delay(interval = 300) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
}

export function addClickBtnLike() {
    const arrayBtnLike = document.querySelectorAll('.like-button');

    for (const btnLike of arrayBtnLike) {
        btnLike.addEventListener('click', (event) => {
            event.stopPropagation();

            btnLike.classList.add('loading-like');
            console.log(btnLike.classList);

            const index = btnLike.dataset.index;

            delay(2000).then(() => {
                comments[index].isLiked
                    ? comments[index].likes--
                    : comments[index].likes++;
                comments[index].isLiked = !comments[index].isLiked;
                renderComments();
            });
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
