import { addClickBtnAddComment } from './eventsBtnAddComment.js';
import { user } from './user.js';

export function renderForm() {
    const app = document.getElementById('app');
    const form = document.createElement('div');

    form.innerHTML = `
        <div class="add-form">
            <input
                type="text"
                class="add-form-name"
                value="${user.name}"
                placeholder="Введите ваше имя"
                readonly
            />
            <textarea
                type="textarea"
                class="add-form-text"
                placeholder="Введите ваш коментарий"
                rows="4"
            ></textarea>
            <div class="add-form-row">
                <button id="write-button" class="add-form-button">Написать</button>
            </div>
        </div>
    `;

    app.appendChild(form);

    addClickBtnAddComment();
}
