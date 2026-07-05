let intervalId = null;

function startTimer() {
  const timerOut = document.getElementById('timer');
  let timeLeft = parseInt(timerOut.textContent, 10);

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    timeLeft--;
    timerOut.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      timerOut.textContent = 'Время вышло!';
    }
  }, 1000);
}

startTimer();
