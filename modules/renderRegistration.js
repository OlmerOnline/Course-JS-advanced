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
                <button class="add-form-button">Войти</button>
            </div>
        </div>`;
}
