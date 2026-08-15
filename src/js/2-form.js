let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();
  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const savedSettings = localStorage.getItem('feedback-form-state');
if (savedSettings) {
  const parsedData = JSON.parse(savedSettings);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
  formData = {
    email: '',
    message: '',
  };
}
