document.addEventListener('DOMContentLoaded', () => {

  const blocks = document.querySelectorAll('.reveal');

  function isVisibleBlock() {
    blocks.forEach(block => {
    const {top, bottom} = block.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visibleBlock = (top < windowHeight) && (bottom > 300);
    if (visibleBlock) {
      block.classList.add('reveal_active');
    } else {
      block.classList.remove('reveal_active');
    }
    });
  }
  isVisibleBlock();
  window.addEventListener('scroll', isVisibleBlock)
});
