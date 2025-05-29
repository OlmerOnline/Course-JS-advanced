import { removeClassError, replaceSymbol } from './helpers.js';
import { postComment } from './api.js';

async function clickAddComment() {
    const inputText = document.querySelector('.add-form-text');
    const formAddComment = document.querySelector('.add-form');
    const container = document.querySelector('.container');

    if (inputText.value === '') {
        if (inputText.value === '') {
            inputText.classList.add('input-error');

            setTimeout(() => removeClassError(inputText), 2000);
        }

        return;
    }

    formAddComment.style.display = 'none';

    const loaderText = document.createElement('p');
    loaderText.textContent = 'Комментарий добавляется';
    container.appendChild(loaderText);

    await postComment({ text: replaceSymbol(inputText.value) });
    container.removeChild(loaderText);
    formAddComment.style.display = 'flex';
}

export function addClickBtnAddComment() {
    const btnWrite = document.getElementById('write-button');
    btnWrite.addEventListener('click', clickAddComment);
}
