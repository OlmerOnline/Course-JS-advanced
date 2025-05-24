import { replaceSymbol } from './replace.js';
import { fetchGetComments } from './fetchGetComments.js';

let btnWrite = document.querySelector('.add-form-button');
let inputName = document.querySelector('.add-form-name');
let inputText = document.querySelector('.add-form-text');
const formAddComment = document.querySelector('.add-form');
const container = document.querySelector('.container');

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

        formAddComment.style.display = 'none';

        const loaderText = document.createElement('p');
        loaderText.textContent = 'Комментарий добавляется';
        container.appendChild(loaderText);

        fetch(API, {
            method: 'POST',
            body: JSON.stringify(newComment),
        })
            .then(() => {
                return fetchGetComments(API);
            })
            .then(() => {
                inputName.value = '';
                inputText.value = '';
                formAddComment.style.display = 'flex';
                container.removeChild(loaderText);
            });
    });
}
