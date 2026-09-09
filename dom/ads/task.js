document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(element => {
    const cases = element.querySelectorAll('.rotator__case');
    if (cases.length === 0) {
      return;
    }
    let index = 0;
    const colors = ['green', 'red', 'blue'];

    function rotate() {
      cases.forEach(e => { 
      e.classList.remove('rotator__case_active');
      e.style.color = '';
      });

      cases[index].classList.add('rotator__case_active');
      cases[index].style.color = colors[index % colors.length];
      index = (index + 1) % cases.length;
  }
  rotate();
  setInterval(rotate, 1000);
  });
});

