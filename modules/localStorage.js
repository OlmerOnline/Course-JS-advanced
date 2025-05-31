import { updateUser } from './user.js';

export function setLocalStorage(user) {
    for (let key in user) {
        localStorage.setItem(key, user[key]);
    }
}

export function getLocalStorage() {
    const newUser = {};
    newUser['_id'] = localStorage.getItem('_id');
    newUser['imageUrl'] = localStorage.getItem('imageUrl');
    newUser['login'] = localStorage.getItem('login');
    newUser['name'] = localStorage.getItem('name');
    newUser['password'] = localStorage.getItem('password');
    newUser['token'] = localStorage.getItem('token');

    return newUser;
}

export function clearLocalStorage() {
    localStorage.removeItem('_id');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('login');
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    localStorage.removeItem('token');

    updateUser({});
}
