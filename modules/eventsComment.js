import { renderComments } from './render.js';
import { comments } from './comments.js';

export function addClickBtnLike() {
    const arrayBtnLike = document.querySelectorAll('.like-button');

    for (const btnLike of arrayBtnLike) {
        btnLike.addEventListener('click', (event) => {
            event.stopPropagation();

            comments[btnLike.dataset.index].isLiked
                ? comments[btnLike.dataset.index].likes--
                : comments[btnLike.dataset.index].likes++;

            comments[btnLike.dataset.index].isLiked =
                !comments[btnLike.dataset.index].isLiked;

            renderComments();
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
