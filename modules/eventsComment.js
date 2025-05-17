import { renderComments } from './render.js';
import { comments } from './comments.js';

export function addClickBtnLike() {
    const arrayBtnLike = document.querySelectorAll('.like-button');

    for (const btnLike of arrayBtnLike) {
        btnLike.addEventListener('click', (event) => {
            event.stopPropagation();

            if (comments[btnLike.dataset.index].isActiveLike) {
                comments[btnLike.dataset.index].isActiveLike = false;
                comments[btnLike.dataset.index].countLike--;
            } else {
                comments[btnLike.dataset.index].isActiveLike = true;
                comments[btnLike.dataset.index].countLike++;
            }

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
            inputText.value = `<${comments[index].text}\n${comments[index].name}>`;
        });
    }
}
