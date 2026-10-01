const signinForm = document.getElementById('signin__form');
const signinBlock = document.getElementById('signin');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

function showWelcome(userId) {
    userIdSpan.textContent = userId;
    signinBlock.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
}

function restoreSession() {
    const savedUserId = localStorage.getItem('user_id');
    if (savedUserId) {
        showWelcome(savedUserId);
    }
}

signinForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(signinForm);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.setItem('user_id', response.user_id);
                showWelcome(response.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        } else {
            alert('Ошибка сервера: ' + xhr.status);
        }
    };

    xhr.onerror = function () {
        alert('Ошибка сети');
    };

    xhr.send(formData);
});

restoreSession();
