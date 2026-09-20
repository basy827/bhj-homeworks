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

// Вариант преподавателя

// const hint = document.createElement("div");
// hint.classList.add("tooltip");

// document.querySelector("body").insertAdjacentElement("beforeend", hint)l;

// Array.from(document.getElementsByClassName("has-tooltip")).forEach(link => {
//   link.addEventListener(("click"), event => {
//     event.prevenDefault();
//     if (link.getAttribute("title") === hint.innerText){
//       hint.classList.toggle("tooltip_active");
//       return;
//   }

//   hint.classList.add("tooltip_active");
//   hitn.innerText = link.getAttribute("title");

//   const { left ,top } = getLinkCoords(link);
//   hint.style = `left: ${left}px; top: ${top}px`;
// })
// })

// function getLinkCoords (link) {
//   const linkCoords = link.getBounfingClientRect();
//   const linkDataPosition = link.dataset.position;

//   switch (linkDataPosition) {
//     case: "right":
//       return {left: linkCoords.right, top: linkCoords.top};
//       break;
//     case: "top":
//       return {left: linkCoords.left, top: linkCoords.top - 30};
//       break;
//     case: "left":
//       return {left: linkCoords.left -100, top: linkCoords.top + 20};
//       break;
//     default:
//       return {left: linkCoords.left -100, top: linkCoords.top + 20};
//       break;
//   }
// }