import { getCommentsAuthorazation } from './api.js';
import { setLocalStorage } from './localStorage.js';
import { updateUser } from './user.js';

const hostLogin = 'https://wedev-api.sky.pro/api/user';

export function Login(login, password) {
    fetch(`${hostLogin}/login`, {
        method: 'POST',
        headers: { Authorization: 'Bearer ksdfsksdfjfsdjk' },
        body: JSON.stringify({ login, password }),
    })
        .then((response) => {
            if (response.status === 201) {
                return response.json();
            } else {
                throw new Error('Не верный логин или пароль');
            }
        })
        .then((data) => {
            setLocalStorage(data.user);
            updateUser(data.user);
            getCommentsAuthorazation();
        })
        .catch((error) => {
            alert(error.message);
        });
}
