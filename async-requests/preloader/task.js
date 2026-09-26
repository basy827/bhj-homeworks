document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const itemsContainer = document.getElementById('items');
  const STORAGE_KEY = 'currency-courses';

  const renderCourses = (data) => {
    const valute = data.response.Valute;
    const html = Object.values(valute).map(currency => `
      <div class="item">
        <div class="item__code">${currency.CharCode}</div>
        <div class="item__value">${currency.Value}</div>
        <div class="item__currency">руб.</div>
      </div>
    `).join('');
    itemsContainer.innerHTML = html;
  };

  const cachedData = localStorage.getItem(STORAGE_KEY);
  if (cachedData) {
    renderCourses(JSON.parse(cachedData));
    loader.classList.remove('loader_active');
  }

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = xhr.response;
    renderCourses(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    loader.classList.remove('loader_active');
  } else {
    console.error('Ошибка загрузки курсов валют: HTTP статус', xhr.status, xhr.statusText);
    if (!cachedData) {
      loader.classList.remove('loader_active');
    }
  }
};

xhr.onerror = () => {
  console.error('Ошибка сети при запросе курсов валют');
  if (!cachedData) {
    loader.classList.remove('loader_active');
  }
};

xhr.send();
});
