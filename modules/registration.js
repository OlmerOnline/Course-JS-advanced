import { getCommentsAuthorazation } from './api.js';
import { setLocalStorage } from './localStorage.js';
import { updateUser } from './user.js';

const hostRegistration = 'https://wedev-api.sky.pro/api/user';

export function Registration(name, login, password) {
    fetch(hostRegistration, {
        method: 'POST',
        headers: { Authorization: 'Bearer ksdfsksdfjfsdjk' },
        body: JSON.stringify({ name, login, password }),
    })
        .then((response) => {
            if (response.status === 201) {
                return response.json();
            } else {
                if (response.status === 400) {
                    throw new Error('Пользователь с таким логином уже есть');
                } else {
                    throw new Error('Что то пошло не так');
                }
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
