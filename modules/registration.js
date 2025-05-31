const hostRegistration = 'https://wedev-api.sky.pro/api/user';

export function Registration(name, login, password) {
    return fetch(hostRegistration, {
        method: 'POST',
        body: JSON.stringify({ name, login, password }),
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
                    alert('Пользователь с таким логином уже есть');
                    break;
                default:
                    alert('Что то пошло не так');
                    break;
            }
        });
}
