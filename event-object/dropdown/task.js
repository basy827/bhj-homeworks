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


//Вариант от преподавателя
// document.addEventListener('click', (e) => {
//   const { target } = e;
//   const value = target.closest('.dropdown__value');

//   if (value) {
//     e.preventDefault();
//     const dropdown = target.closest('.dropdown');
//     const list = dropdown.querySelector('.dropdown__list');
//     list.classList.toggle('dropdown__list_active');

//     return;
//   }

//   const item = target.closest('.dropdown__item');

//   if (item) {
//     e.preventDefault();
//     const dropdown = target.closest('.dropdown');
//     const value = dropdown.querySelector('.dropdown__value');

//     const list = item.closest('.dropdown__list');
//     list.classList.remove('dropdown__list_active');

//     value.textContent = item.textContent.trim();

//     return;
//   }
// });

// 2 вариант от преподавателя

// const containers = document.querySelectorAll('.dropdown');

// containers.forEach(node => {
//   const value = node.querySelector('.dropdown__value');
//   const list = node.querySelector('.dropdown__list');

//   const items = node.querySelectorAll('.dropdown__item');

//   value.addEventListener('click', e => {
//     list.classList.toggle('dropdown__list_active')
//   })

//   items.forEach(item => {
//     item.addEventListener('click', e => {
//       e.preventDefault();

//       list.classList.remove('dropdown__list_active')

//       value.textContent = item.textContent.trim();
//     })
//   })
  
// });
