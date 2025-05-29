import { Registration } from './registration.js';

export function renderRegistration() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="add-form">
            <input
                id="name-input"
                type="text"
                class="add-form-name"
                placeholder="Введите имя"
            />
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
                <button id='registration-btn' class="add-form-button">Войти</button>
            </div>
        </div>`;

    const nameInput = document.getElementById('name-input');
    const loginInput = document.getElementById('login-input');
    const passwordInput = document.getElementById('password-input');
    const registrationBtn = document.getElementById('registration-btn');

    registrationBtn.addEventListener('click', () => {
        Registration(nameInput.value, loginInput.value, passwordInput.value);
    });
}
