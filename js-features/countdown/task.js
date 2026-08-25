let intervalId;
let timerLeft = parseInt(document.getElementById('timer').textContent);

const lower = function () {
  const timer = document.getElementById('timer');
  function formatSeconds(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map(v => String(v).padStart(2, '0'))
      .join(':');
}

    if (timerLeft === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  } else {
    timerLeft--;
    timer.textContent = formatSeconds(timerLeft);
  }
}
lower();
intervalId = setInterval(lower, 1000);