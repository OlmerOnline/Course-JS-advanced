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

function clickAddComment(API) {
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

    const newComment = {
        text: replaceSymbol(inputText.value),
        name: replaceSymbol(inputName.value),
        forceError: true,
    };

    formAddComment.style.display = 'none';

    const loaderText = document.createElement('p');
    loaderText.textContent = 'Комментарий добавляется';
    container.appendChild(loaderText);

    let isCrashServer = false;

    fetch(API, {
        method: 'POST',
        body: JSON.stringify(newComment),
    })
        .then((responce) => {
            if (responce.status === 201) {
                inputName.value = '';
                inputText.value = '';

                return fetchGetComments(API);
            } else {
                if (responce.status === 400) {
                    throw new Error('400');
                }

                if (responce.status === 500) {
                    isCrashServer = true;
                    clickAddComment(API);
                }
            }
        })
        .catch((error) => {
            switch (error.message) {
                case '400':
                    alert('Имя и комментарий должны быть не короче 3 символов');
                    break;
                case '500':
                    alert('Сервер сломался, попробуй позже');
                    break;
                default:
                    alert('Кажется, у вас сломался интернет, попробуйте позже');
                    break;
            }
        })
        .finally(() => {
            container.removeChild(loaderText);

            if (!isCrashServer) {
                formAddComment.style.display = 'flex';
            }
        });
}

export function addClickBtnAddComment(API) {
    btnWrite.addEventListener('click', () => clickAddComment(API));
}
