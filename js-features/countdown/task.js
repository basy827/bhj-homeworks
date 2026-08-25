const lower = function () {
  const timer = document.getElementById('timer');
  let timerLeft = parseInt(timer.textContent);
  if (timerLeft === 0) {
    alert("Вы победили в конкурсе!");
  } else {
    timerLeft--;
    timer.textContent = timerLeft;
  }
}
setInterval(lower, 1000);