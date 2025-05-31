import { comments, updateComments } from './comments.js';

import { renderForm } from './renderForm.js';
import { renderLogin } from './renderLogin.js';
import { renderRegistration } from './renderRegistration.js';

import { addClickBtnLike, addClickComment } from './eventsComment.js';
import { formatDate } from './date.js';
import { getComments, getCommentsAuthorazation } from './api.js';
import { renderHeader } from './renderHeader.js';
import { getLocalStorage } from './localStorage.js';
import { updateUser } from './user.js';

export async function renderComments() {
    if (localStorage.getItem('token') !== null) {
        updateUser(getLocalStorage());

        await getCommentsAuthorazation().then((data) => {
            updateComments(data.comments);
        });

        renderHeader();
    } else {
        await getComments().then((data) => {
            updateComments(data.comments);
        });
    }

    const app = document.getElementById('app');

    const htmlComments = comments
        .map((comment, index) => {
            return `
            <li data-index='${index}' class="comment">
              <div class="comment-header">
                <div>${comment.author.name}</div>
                <div>${formatDate(comment.date)}</div>
              </div>
              <div>
              </div>
              <div class="comment-body">
                <div class="comment-text">
                  ${comment.text.replaceAll('\n', '<br>')}
                </div>
              </div>
              <div class="comment-footer">
                <div class="likes">
                  <span class="likes-counter">${comment.likes}</span>
                  <button data-index="${index}" class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
                </div>
              </div>
            </li>`;
        })
        .join('');

    app.innerHTML = `
        <ul class="comments">
          ${htmlComments}
        </ul>
    `;

    if (localStorage.getItem('token') === null) {
        const app = document.getElementById('app');

        const login = document.createElement('button');
        login.classList.add('add-form-button');
        login.textContent = 'Чтобы добавить комментарий, авторизуйтесь';
        login.addEventListener('click', () => {
            renderLogin();
        });

        const registaration = document.createElement('button');
        registaration.classList.add('add-form-button');
        registaration.textContent = 'Регистрация';
        registaration.addEventListener('click', () => {
            renderRegistration();
        });

        app.appendChild(login);
        app.appendChild(registaration);
    } else {
        renderForm();
        addClickComment();
    }

    addClickBtnLike();
}
