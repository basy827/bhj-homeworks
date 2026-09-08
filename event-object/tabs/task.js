document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const contents = Array.from(document.querySelectorAll('.tab__content'));

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tab_active'));
      contents.forEach(c => c.classList.remove('tab__content_active'));
      tab.classList.add('tab_active');
      const targetContent = contents[index];
      if (targetContent) {
        targetContent.classList.add('tab__content_active');
      }
    });
  });
});
