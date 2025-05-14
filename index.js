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

const comments = [
    {
        name: "Глеб Фокин",
        date: "12.02.22 12:18",
        text: "Это будет первый комментарий на этой странице",
        countLike: 3,
        isActiveLike: false,
    },
    {
        name: "Варвара Н.",
        date: "13.02.22 19:22",
        text: "Мне нравится как оформлена эта страница! ❤",
        countLike: 75,
        isActiveLike: true,
    },
];

let listComment = document.querySelector('.comments');
let btnWrite = document.querySelector('.add-form-button');
let inputName = document.querySelector('.add-form-name');
let inputText = document.querySelector('.add-form-text');

function addEventBtnLike() {
    const arrayBtnLike = document.querySelectorAll('.like-button');
    for (const btnLike of arrayBtnLike) {
        btnLike.addEventListener('click', () => {
            if (comments[btnLike.dataset.index].isActiveLike) {
                comments[btnLike.dataset.index].isActiveLike = false;
                comments[btnLike.dataset.index].countLike--;
            } else {
                comments[btnLike.dataset.index].isActiveLike = true;
                comments[btnLike.dataset.index].countLike++;            
            }

            renderComments()
        });
    }
}

function renderComments() {
    const htmlComments = comments.map((comment, index) => {
        return `
        <li class="comment">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.countLike}</span>
              <button data-index="${index}" class="like-button ${comment.isActiveLike ? '-active-like' : ''}"></button>
            </div>
          </div>
        </li>`;
    })
    .join('');

    listComment.innerHTML = htmlComments;

    addEventBtnLike();
}

renderComments();

btnWrite.addEventListener('click', () => {
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