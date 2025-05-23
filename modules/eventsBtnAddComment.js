import { renderComments } from './render.js';
import { comments, updateComments } from './comments.js';
import { replaceSymbol } from './replace.js';

let btnWrite = document.querySelector('.add-form-button');
let inputName = document.querySelector('.add-form-name');
let inputText = document.querySelector('.add-form-text');

function removeClassError(input) {
    input.classList.remove('input-error');
}

export function addClickBtnAddComment(API) {
    btnWrite.addEventListener('click', () => {
        if (inputName.value === '' || inputText.value === '') {
            if (inputName.value === '') {
                inputName.classList.add('input-error');

                setTimeout(() => removeClassError(inputName), 2000);
            }
            if (inputText.value === '') {
                inputText.classList.add('input-error');

                setTimeout(() => removeClassError(inputText), 2000);
            }

            return;
        }

        if (inputName.value.length < 3 || inputText.value.length < 3) {
            inputName.value.length < 3
                ? alert('Имя не должно быть менее 3 символов')
                : alert('Комментарий не должен быть менее 3 символов');
            return;
        }

        const newComment = {
            text: replaceSymbol(inputText.value),
            name: replaceSymbol(inputName.value),
        };

        inputName.value = '';
        inputText.value = '';

        fetch(API, {
            method: 'POST',
            body: JSON.stringify(newComment),
        });

        fetch(API, { method: 'GET' })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                updateComments(data.comments);
                renderComments();
            });
    });
}
