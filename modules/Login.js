const hostLogin = 'https://wedev-api.sky.pro/api/user/login';

export function Login(login, password) {
    return fetch(hostLogin, {
        method: 'POST',
        body: JSON.stringify({ login, password }),
    })
        .then((response) => {
            if (response.status === 201) {
                return response.json();
            } else {
                if (response.status === 400) {
                    throw new Error('400');
                } else {
                    throw new Error('Что то пошло не так');
                }
            }
        })
        .catch((error) => {
            switch (error.message) {
                case '400':
                    alert('Не верный логин или пароль');
                    break;
                default:
                    alert('Что то пошло не так');
                    break;
            }
        });
}
