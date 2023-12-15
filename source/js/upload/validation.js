const form = document.querySelector('.form');

const pristine = new Pristine(form, {
  classTo: 'form__item',
  errorClass: 'form__item--error',
  errorTextParent: 'form__item',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

const checkValidity = () => pristine.validate();

export {checkValidity};
