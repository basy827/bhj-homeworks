const names = document.getElementById('name');
const feedback = document.getElementById('feedback');

names.addEventListener('input', () => {
  const nameValue = names.value;
});

feedback.addEventListener('input', () => {
  const feedbackValue = feedback.value;
});

const form = document.querySelector('form');
const div = document.querySelector('.content');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const p1 = document.createElement('p');
  p1.textContent = `Имя: ${names.value}`;
  div.appendChild(p1);
  const p2 = document.createElement('p');
  p2.textContent = `Текст: ${feedback.value}`;
  div.appendChild(p2);
  names.value = '';
  feedback.value = '';
});
