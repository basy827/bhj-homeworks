const dropdowns = [...document.querySelectorAll('.dropdown')];

dropdowns.forEach(dropdown => {
  const dropdownList = dropdown.querySelector('.dropdown__list');
  const dropdownValue = dropdown.querySelector('.dropdown__value');

  dropdown.addEventListener('click', (event) => {
    const targetLink = event.target.closest('.dropdown__link');

    if (targetLink) {
      event.preventDefault();
      const text = targetLink.textContent.trim();
      dropdownValue.textContent = text;
      dropdownList.style.display = 'none';
    } else {
      const isVisible = dropdownList.style.display === 'block';
      dropdownList.style.display = isVisible ? 'none' : 'block';
    }
  });

  window.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      dropdownList.style.display = 'none';
    }
  });
});
