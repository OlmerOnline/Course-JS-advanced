import { comments } from './comments.js';
import { user } from './user.js';

import { renderForm } from './renderForm.js';
import { renderLogin } from './renderLogin.js';
import { renderRegistration } from './renderRegistration.js';

import { addClickBtnLike, addClickComment } from './eventsComment.js';
import { formatDate } from './date.js';

export function renderComments() {
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

    if (Object.keys(user).length === 0) {
        const app = document.getElementById('app');

        const login = document.createElement('button');
        login.classList.add('add-form-button');
        login.textContent = 'Чтобы добавить комментарий, авторизуйтесь';
        login.addEventListener('click', () => {
            renderLogin();
        });

        const registaration = document.createElement('button');
        registaration.classList.add('add-form-button');
        registaration.textContent = 'Зарегистрироваться';
        registaration.addEventListener('click', () => {
            renderRegistration();
        });

        app.appendChild(login);
        app.appendChild(registaration);
    } else {
        renderForm();
        addClickBtnLike();
        addClickComment();
    }
}
