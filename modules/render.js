import { comments } from './comments.js';
import { addClickBtnLike, addClickComment } from './eventsComment.js';
import { formatDate } from './date.js';

export function renderComments() {
    const listComment = document.querySelector('.comments');

    const htmlComments = comments
        .map((comment, index) => {
            return `
            <li data-index='${index}' class="comment">
              <div class="comment-header">
                <div>${comment.author.name}</div>
                <div>${formatDate(comment.date)}</div>
              </div>
              <div>
              </div>
              <div class="comment-body">
                <div class="comment-text">
                  ${comment.text.replaceAll('\n', '<br>')}
                </div>
              </div>
              <div class="comment-footer">
                <div class="likes">
                  <span class="likes-counter">${comment.likes}</span>
                  <button data-index="${index}" class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
                </div>
              </div>
            </li>`;
        })
        .join('');

    listComment.innerHTML = htmlComments;

    addClickBtnLike();
    addClickComment();
}
