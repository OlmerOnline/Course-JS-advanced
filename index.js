function getCurrentDate() {

    let date = new Date();
    let day = String(date.getDate()).padStart(2, 0);
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let year = String(date.getFullYear()).slice(-2);
    let hour = String(date.getHours()).padStart(2, 0);
    let minute = String(date.getMinutes()).padStart(2, 0);

    return `${day}.${month}.${year} ${hour}:${minute}`;
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

function addClickBtnLike() {
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

    addClickBtnLike();
}

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
        comments.push(
            {
                name: inputName.value,
                date: getCurrentDate(),
                text: inputText.value,
                countLike: 0,
                isActiveLike: false,
            }
        );

        inputName.value = '';
        inputText.value = '';

        renderComments();
    }
});

renderComments();