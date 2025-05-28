import { getComments, getCommentsAuthorazation } from './modules/api.js';
import { getLocalStorage } from './modules/localStorage.js';
import { updateUser } from './modules/user.js';

if (localStorage.getItem('token') !== null) {
    updateUser(getLocalStorage());
    getCommentsAuthorazation();
} else {
    getComments();
}
