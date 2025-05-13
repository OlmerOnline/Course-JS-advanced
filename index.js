function createCommentHeader(name) {
    let divHeader = document.createElement('div');
    let divName = document.createElement('div');
    let divDate = document.createElement('div');

    let date = new Date();
    let day = String(date.getDate()).padStart(2, 0);
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let year = String(date.getFullYear()).slice(-2);
    let hour = String(date.getHours()).padStart(2, 0);
    let minute = String(date.getMinutes()).padStart(2, 0);

    divName.textContent = name;
    divDate.textContent = `${day}.${month}.${year} ${hour}:${minute}`;
    divHeader.className = 'comment-header';

    divHeader.appendChild(divName);
    divHeader.appendChild(divDate);

    return divHeader;
}

function createCommentBody(text) {
    let divBody = document.createElement('div');
    let divText = document.createElement('div');

    divBody.className = 'comment-body';
    divText.className = 'comment-text';
    divText.textContent = text;

    divBody.appendChild(divText);

    return divBody;
}

function createCommentFooter() {
    let divFooter = document.createElement('div');
    let divLikes = document.createElement('div');
    let spanCounter = document.createElement('span');
    let btnLike = document.createElement('button');

    divFooter.className = 'comment-footer';
    divLikes.className = 'likes';
    btnLike.className = 'like-button';
    spanCounter.className = 'likes-counter';
    spanCounter.textContent = 0;

    divLikes.appendChild(spanCounter);
    divLikes.appendChild(btnLike);
    divFooter.appendChild(divLikes);

    return divFooter;
}

function removeClassError(input) {
    input.classList.remove('input-error');
}

let listComment = document.querySelector('.comments');
let btnWrite = document.querySelector('.add-form-button');
let inputName = document.querySelector('.add-form-name');
let inputText = document.querySelector('.add-form-text');

btnWrite.addEventListener('click', () => {
    console.log('click');

    if (inputName.value === '' || inputText.value === '') {
    if (inputName.value === '') {
        inputName.classList.add('input-error')

        setTimeout(() => removeClassError(inputName), 2000);
    }
    if (inputText.value === '') {
        inputText.classList.add('input-error')

        setTimeout(() => removeClassError(inputText), 2000);
    }
    } else {
    let newComment = document.createElement('li');
    newComment.className = 'comment';

    let header = createCommentHeader(inputName.value);
    let body = createCommentBody(inputText.value);
    let footer = createCommentFooter();

    newComment.appendChild(header);
    newComment.appendChild(body);
    newComment.appendChild(footer);

    listComment.appendChild(newComment);

    inputName.value = '';
    inputText.value = '';
    }
});