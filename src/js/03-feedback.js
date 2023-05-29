import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.email');
const message = document.querySelector('.message');

form.addEventListener('input', throttle(setDataInput, 500));
form.addEventListener('submit', resetOnSubmit);

populateFeedbackForm();

function setDataInput(evt) {
    const { elements: { email, message } } = evt.currentTarget;
    // console.log(message.value);
    // console.log(email.value);
    const userData = {
      userEmail: email.value,
      userMessage: message.value,
    };

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}
function resetOnSubmit(evt) {
  evt.preventDefault();
//   console.log('Отправка формы');
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function populateFeedbackForm() {
  const savedUserData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedUserData) {
      form.elements.message.value = savedUserData.userMessage;
      form.elements.email.value = savedUserData.userEmail;
  }
    
}