import { renderComments } from "./render.js";
import { comments } from "./comments.js";
import { getCurrentDate } from "./date.js";
import { replaceSymbol } from "./replace.js";

let btnWrite = document.querySelector(".add-form-button");
let inputName = document.querySelector(".add-form-name");
let inputText = document.querySelector(".add-form-text");

function removeClassError(input) {
  input.classList.remove("input-error");
}

export function addClickBtnAddComment() {
  btnWrite.addEventListener("click", () => {
    if (inputName.value === "" || inputText.value === "") {
      if (inputName.value === "") {
        inputName.classList.add("input-error");

        setTimeout(() => removeClassError(inputName), 2000);
      }
      if (inputText.value === "") {
        inputText.classList.add("input-error");

        setTimeout(() => removeClassError(inputText), 2000);
      }
    } else {
      comments.push({
        name: replaceSymbol(inputName.value),
        date: getCurrentDate(),
        text: replaceSymbol(inputText.value),
        countLike: 0,
        isActiveLike: false,
      });

      inputName.value = "";
      inputText.value = "";

      renderComments();
    }
  });
}
