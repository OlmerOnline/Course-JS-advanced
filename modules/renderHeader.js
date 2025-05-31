import { clearLocalStorage } from './localStorage.js';
import { renderComments } from './renderComments.js';
import { user } from './user.js';

export function renderHeader() {
    const header = document.getElementById('header');

    header.innerHTML = `
        <p>${user.name}</p>
        <button id="logout" class="header-btn">Выйти</button>
    `;

    const logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click', () => {
        clearLocalStorage();
        header.innerHTML = '';
        renderComments();
    });
}
