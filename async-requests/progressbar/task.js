const form = document.getElementById('form');
const progress = document.getElementById('progress');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    xhr.upload.addEventListener('progress', function (e) {
        if (e.lengthComputable) {
            const percentComplete = e.loaded / e.total;
            progress.value = percentComplete;
        }
    });

    xhr.addEventListener('load', function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            progress.value = 1;
        }
    });

    xhr.addEventListener('error', function () {
        console.error('Ошибка загрузки файла');
    });

    xhr.send(formData);
});
