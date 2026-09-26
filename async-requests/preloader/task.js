document.addEventListener('DOMContentLoaded', () => {
  const pollTitle = document.getElementById('poll__title');
  const pollAnswers = document.getElementById('poll__answers');
  const STORAGE_KEY = 'poll-data';

  const renderPoll = (data) => {
    pollTitle.textContent = data.data.title;
    pollAnswers.innerHTML = data.data.answers.map(
      (answer, index) => `<button class="poll__answer" data-index="${index}">${answer}</button>`
    ).join('');
  };

  const showResults = (stat) => {
    pollAnswers.classList.remove('poll__answers_active');
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'poll__results';
    const totalVotes = stat.reduce((sum, item) => sum + item.votes, 0);

    resultsDiv.innerHTML = stat.map(item => {
      const percent = totalVotes > 0 ? Math.round((item.votes / totalVotes) * 100) : 0;
      return `<div class="result">
        <span class="result__name">${item.answer}</span>
        <span class="result__value">${item.votes} (${percent}%)</span>
      </div>`;
    }).join('');

    pollAnswers.appendChild(resultsDiv);
  };

  const handleVote = (pollId, answerIndex) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
      if (xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        showResults(result.stat);
      }
    };
    xhr.send(`vote=${pollId}&answer=${answerIndex}`);
  };

  const cachedData = localStorage.getItem(STORAGE_KEY);
  if (cachedData) {
    renderPoll(JSON.parse(cachedData));
  }

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      renderPoll(data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      pollAnswers.addEventListener('click', (e) => {
        if (e.target.classList.contains('poll__answer')) {
          const answerIndex = e.target.dataset.index;
          alert('Спасибо, ваш голос засчитан!');
          handleVote(data.id, answerIndex);
        }
      });
    }
  };
  xhr.send();
});