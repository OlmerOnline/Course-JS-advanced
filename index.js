import { fetchGetComments } from './modules/fetchGetComments.js';
import { addClickBtnAddComment } from './modules/eventsBtnAddComment.js';

const API = 'https://wedev-api.sky.pro/api/v1/arusskov/comments';

fetchGetComments(API);
addClickBtnAddComment(API);
