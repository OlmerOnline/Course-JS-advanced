import { removeClassError } from './helpers.js';
import { setLocalStorage } from './localStorage.js';
import { Login } from './login.js';
import { renderComments } from './renderComments.js';
import { updateUser } from './user.js';

export function renderLogin() {
    window.scrollTo(0, 0);

    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="add-form">
            <input
                id="login-input"
                type="text"
                class="add-form-name"
                placeholder="Введите логин"
            />
            <input
                id="password-input"
                type="text"
                class="add-form-name_login"
                placeholder="Введите пароль"
            />
            <div class="add-form-login">
                <button id='login-btn' class="add-form-button">Войти</button>
                <button id='back-btn' class="add-form-button">Назад</button>
            </div>
        </div>`;

    const loginInput = document.getElementById('login-input');
    const passwordInput = document.getElementById('password-input');
    const loginBtn = document.getElementById('login-btn');
    const backBtn = document.getElementById('back-btn');

    loginBtn.addEventListener('click', () => {
        if (loginInput.value === '' || passwordInput.value === '') {
            if (loginInput.value === '') {
                loginInput.classList.add('input-error');

                setTimeout(() => removeClassError(loginInput), 2000);
            }

            if (passwordInput.value === '') {
                passwordInput.classList.add('input-error');

                setTimeout(() => removeClassError(passwordInput), 2000);
            }

            return;
        }
        Login(loginInput.value, passwordInput.value).then((data) => {
            setLocalStorage(data.user);
            updateUser(data.user);
            renderComments();
        });
    });

    backBtn.addEventListener('click', () => {
        renderComments();
    });
}
