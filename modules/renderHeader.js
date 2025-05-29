import { getComments } from './api.js';
import { clearLocalStorage } from './localStorage.js';
import { user } from './user.js';

export function renderHeader(isLogin) {
    const header = document.getElementById('header');

    if (isLogin) {
        header.innerHTML = `
        <p>${user.name}</p>
        <button id="logout">Выйти</button>
    `;

        const logoutBtn = document.getElementById('logout');
        logoutBtn.addEventListener('click', () => {
            clearLocalStorage();
            getComments();
        });
    } else {
        header.innerHTML = '';
    }
}
