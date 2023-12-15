import {checkValidity} from "./validation.js";
import {renderMessage} from "../modal/message.js";

const form = document.querySelector('.form');
const submitButton = form.querySelector('.form__button');

const setSubmitButtonDisabled = (flag) => {
  submitButton.disabled = flag;
  submitButton.textContent = flag ? 'Отправляем...' : 'Отправить отзыв';
};

const clearForm = () => {
  form.querySelectorAll('input').forEach((field) => {
    field.value = '';
  });

  form.querySelector('textarea').value = 'Опишите подробно все свои восторги';

  form.querySelectorAll('.radio-input')[0].checked = true;

  form.querySelectorAll('.checkbox-input').forEach((checkbox) => {
    checkbox.checked = false;
  });
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (checkValidity()) {
    setSubmitButtonDisabled(true);
    setTimeout(() => {
      renderMessage('success');
      clearForm();
    }, 2000);
  } else {
    renderMessage('error');
  }
})

document.addEventListener('removeMessage', () => {
  setSubmitButtonDisabled(false);
});
