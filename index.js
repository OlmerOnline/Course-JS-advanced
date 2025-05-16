import { renderComments } from "./modules/render.js";
import { addClickBtnAddComment } from "./modules/eventsBtnAddComment.js";

let listComment = document.querySelector(".comments");
let btnWrite = document.querySelector(".add-form-button");
let inputName = document.querySelector(".add-form-name");
let inputText = document.querySelector(".add-form-text");

renderComments();
addClickBtnAddComment();
