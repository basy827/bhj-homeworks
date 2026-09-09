document.addEventListener('DOMContentLoaded', () => {
  const fonts = Array.from(document.querySelectorAll('.font-size'));
  fonts.forEach((font) => {
    font.addEventListener('click', (event) => {
      event.preventDefault();
      fonts.forEach(f => f.classList.remove('font-size_active'));
      font.classList.add('font-size_active');
      const book = document.querySelector('.book');
      book.classList.remove('font-size_small', 'font-size_big');
      if (font.dataset.size === 'small') {
        book.classList.add('font-size_small');
      } else if (font.dataset.size === 'big') {
        book.classList.add('font-size_big');
      }
    });
  });

  const textColors = Array.from(document.querySelectorAll('.book__control_color .color'));
  textColors.forEach((color) => {
    color.addEventListener('click', (event) => {
      event.preventDefault();
      textColors.forEach(c => c.classList.remove('color_active'));
      color.classList.add('color_active');
      const book = document.querySelector('.book');
      book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
      if (color.dataset.textColor === 'black') {
        book.classList.add('book_color-black');
      } else if (color.dataset.textColor === 'gray') {
        book.classList.add('book_color-gray');
      } else if (color.dataset.textColor === 'whitesmoke') {
        book.classList.add('book_color-whitesmoke');
      }
    });
  });

  const backgrounds = Array.from(document.querySelectorAll('.book__control_background .color'));
  backgrounds.forEach((background) => {
    background.addEventListener('click', (event) => {
      event.preventDefault();
      backgrounds.forEach(b => b.classList.remove('color_active'));
      background.classList.add('color_active');
      const book = document.querySelector('.book');
      book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
      if (background.dataset.bgColor === 'black') {
        book.classList.add('book_bg-black');
      } else if (background.dataset.bgColor === 'gray') {
        book.classList.add('book_bg-gray');
      } else if (background.dataset.bgColor === 'white') {
        book.classList.add('book_bg-white');
      }
    });
  });

});
