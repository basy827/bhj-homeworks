document.addEventListener('DOMContentLoaded', () => {
  const game = document.getElementById('game');
  const statusWins = game.querySelector('.status__wins');
  const statusLoss = game.querySelector('.status__loss');
  const wordContainer = game.querySelector('.word');
  
  // Создаем элемент таймера
  const timerEl = document.createElement('div');
  timerEl.className = 'timer';
  game.querySelector('.status').after(timerEl); 

  // Исходный список слов
  const wordsPool = ['Кот', 'Дом', 'Лес', 'директор', 'водопровод', 'Стамбул', 'навес', 'окись', 'керосинка', 'горизонт', 'редька', 'брусника', 'багрец', 'лебедь', 'хамелеон', 'аптека', 'памятник', 'Кипр', 'буклет', 'воск', 'лысый', 'дама', 'маятник', 'Ветер', 'Река', 'Мост'];
  
  let shuffledWords = []; // Сюда будем класть перемешанные слова
  let currentWordIndex = 0;
  let currentIndex = 0; 
  let wins = 0;      
  let losses = 0;    
  let consecutiveErrors = 0; 
  
  let timerInterval;
  const TIME_LIMIT = 10; 
  let timeLeft = TIME_LIMIT;

  // --- Функция перемешивания (Алгоритм Фишера-Йетса) ---
  function shuffleArray(array) {
    const newArray = [...array]; // Создаем копию, чтобы не ломать оригинал
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  function initWord() {
    // Если слова в перемешанном списке закончились, перемешиваем заново
    if (currentWordIndex >= shuffledWords.length) {
      shuffledWords = shuffleArray(wordsPool);
      currentWordIndex = 0;
    }

    const originalWord = shuffledWords[currentWordIndex];
    
    // 1. Полная очистка контейнера
    wordContainer.innerHTML = '';
    
    for (const ch of originalWord) {
      const span = document.createElement('span');
      span.className = 'symbol'; // Базовый класс
      span.textContent = ch;
      wordContainer.appendChild(span);
    }
    
    currentIndex = 0;
    timeLeft = TIME_LIMIT;
    updateTimerDisplay();
    startTimer();
  }

  function updateTimerDisplay() {
    timerEl.innerHTML = `Время: ${timeLeft} сек`;
    timerEl.style.color = timeLeft <= 0 ? 'red' : '#333';
  }

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleTimeOut();
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function getCurrentSymbolElement() {
    const symbols = wordContainer.querySelectorAll('.symbol');
    return symbols[currentIndex] || null;
  }

  function success() {
    const el = getCurrentSymbolElement();
    if (!el) return;

    // ВАЖНО: Сначала убираем любые ошибочные стили, потом добавляем правильный
    el.classList.remove('word_incorrect'); 
    el.classList.add('symbol_correct');
    
    currentIndex++;

    const currentWord = shuffledWords[currentWordIndex];
    if (currentIndex >= currentWord.length) {
      wins++;
      statusWins.innerHTML = wins.toString();
      stopTimer();
      consecutiveErrors = 0; // Сброс серии ошибок
      
      checkWinCondition();

      currentWordIndex++; 
      setTimeout(initWord, 800); 
    }
  }

  function fail() {
    losses++;
    statusLoss.innerHTML = losses.toString();
    stopTimer();
    consecutiveErrors++; 

    // Красим ВСЕ буквы слова в красный (ошибка слова)
    const symbols = wordContainer.querySelectorAll('.symbol');
    symbols.forEach(el => {
        el.classList.remove('symbol_correct'); // Убираем зелёный, если вдруг был
        el.classList.add('word_incorrect');
    });

    checkLoseCondition();

    setTimeout(() => {
      currentWordIndex++;
      initWord();
    }, 1500); 
  }

  function handleTimeOut() {
    fail();
  }

  function checkLoseCondition() {
    if (consecutiveErrors >= 3) {
      alert('Вы проиграли! Слишком много ошибок подряд.');
      resetGame();
    }
  }

  function checkWinCondition() {
    if (wins >= 5) {
      alert('Поздравляем! Вы победили! Набрано 5 слов.');
      resetGame();
    }
  }

  function resetGame() {
    wins = 0;
    losses = 0;
    consecutiveErrors = 0;
    currentWordIndex = 0;
    statusWins.innerHTML = '0';
    statusLoss.innerHTML = '0';
    
    // При сбросе игры тоже перемешиваем слова, чтобы новая игра была с новым порядком
    shuffledWords = shuffleArray(wordsPool);
    initWord();
  }

  document.addEventListener('keyup', (e) => {
    const currentEl = getCurrentSymbolElement();
    // Если текущего элемента нет (игра на паузе или кончилась), не реагируем
    if (!currentEl) return; 

    const typedChar = e.key;
    const currentWord = shuffledWords[currentWordIndex];
    const expectedChar = currentWord[currentIndex];

    if (typedChar.toLowerCase() === expectedChar.toLowerCase()) {
      success();
    } else {
      fail();
    }
  });

  // Инициализация: сразу перемешиваем слова перед стартом
  shuffledWords = shuffleArray(wordsPool);
  initWord();
});
