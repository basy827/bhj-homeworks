const getTooltip = function () {
  let tooltips = document.querySelector('.tooltip');
  if (!tooltips) {
    tooltips = document.createElement('div');
    tooltips.className = 'tooltip';
    document.body.appendChild(tooltips);
  }
  return tooltips;
};

const tooltip = getTooltip();

const position = {
  top: (rect, w, h) => ({
    left: rect.left,
    top: rect.top - h - 7
  })
};

document.querySelectorAll('.has-tooltip').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();

    const text = el.getAttribute('title');
    const pos = el.getAttribute('data-position');

    tooltip.textContent = text;

    const rect = el.getBoundingClientRect();
    const w = tooltip.offsetWidth;
    const h = tooltip.offsetHeight;

    const coordinates = (position.top)(rect, w, h);

    tooltip.style.left = coordinates.left + '5px';
    tooltip.style.top = coordinates.top + 'px';

    tooltip.classList.add('tooltip_active');
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.has-tooltip')) {
    tooltip.classList.remove('tooltip_active');
  }
});
