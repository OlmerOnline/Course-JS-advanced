import { removeClassError } from './helpers.js';
import { setLocalStorage } from './localStorage.js';
import { Registration } from './registration.js';
import { renderComments } from './renderComments.js';
import { updateUser } from './user.js';

export function renderRegistration() {
    window.scrollTo(0, 0);

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
                class="add-form-name_login"
                placeholder="Введите логин"
            />
            <input
                id="password-input"
                type="text"
                class="add-form-name_login"
                placeholder="Введите пароль"
            />
            <div class="add-form-login">
                <button id='registration-btn' class="add-form-button">Зарегистрироваться</button>
                <button id='back-btn' class="add-form-button">Назад</button>
            </div>
        </div>`;

    const nameInput = document.getElementById('name-input');
    const loginInput = document.getElementById('login-input');
    const passwordInput = document.getElementById('password-input');
    const registrationBtn = document.getElementById('registration-btn');
    const backBtn = document.getElementById('back-btn');

    registrationBtn.addEventListener('click', () => {
        if (
            loginInput.value === '' ||
            passwordInput.value === '' ||
            nameInput.value === ''
        ) {
            if (nameInput.value === '') {
                nameInput.classList.add('input-error');

                setTimeout(() => removeClassError(nameInput), 2000);
            }
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

        Registration(
            nameInput.value,
            loginInput.value,
            passwordInput.value,
        ).then((data) => {
            setLocalStorage(data.user);
            updateUser(data.user);
            renderComments();
        });
    });

    backBtn.addEventListener('click', () => {
        renderComments();
    });
}
