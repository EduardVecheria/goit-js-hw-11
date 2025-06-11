let formData = {
    email: '',
    message: ''
  };
  const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

loadFormData();

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // Обрізаємо пробіли
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);


  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});


function loadFormData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      formData = { ...formData, ...parsed };

      if (parsed.email) form.elements.email.value = parsed.email;
      if (parsed.message) form.elements.message.value = parsed.message;
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
    }
  }
}
