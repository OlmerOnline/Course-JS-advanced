import { Login } from './Login.js';

export function renderLogin() {
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
                class="add-form-name"
                placeholder="Введите пароль"
            />
            <div class="add-form-row">
                <button id='login-btn'class="add-form-button">Войти</button>
            </div>
        </div>`;

    const loginInput = document.getElementById('login-input');
    const passwordInput = document.getElementById('password-input');
    const loginBtn = document.getElementById('login-btn');

    loginBtn.addEventListener('click', () => {
        Login(loginInput.value, passwordInput.value);
    });
}
