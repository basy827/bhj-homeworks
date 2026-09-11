const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const genreSelect = document.querySelector('#genre');
const content = document.querySelector('.content');

const genres = [
    { label: 'Драма', value: 'drama' },
    { label: 'Комедия', value: 'comedy' },
    { label: 'Фантастика', value: 'sci-fi' },
];

genres.forEach(({ label, value }) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    genreSelect.append(option);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const filmName = nameInput.value.trim();

    if (!filmName) {
        return;
    }

    const selectedGenreLabel = genreSelect.options[genreSelect.selectedIndex].textContent;
    content.innerHTML = `
        <p>Название фильма: ${filmName}</p>
        <p>Жанр: ${selectedGenreLabel}</p>
    `;
    form.reset();
});