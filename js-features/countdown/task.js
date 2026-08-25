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
    if (confirm("Вы победили в конкурсе! Скачать сертификат?")) {
  fetch("https://cdn2.specialist.ru/content/image/simplepage/sert-2019-newyear.jpg")
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "certificate.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
}
    clearInterval(intervalId);
  } else {
    timerLeft--;
    timer.textContent = formatSeconds(timerLeft);
  }
}
lower();
intervalId = setInterval(lower, 1000);