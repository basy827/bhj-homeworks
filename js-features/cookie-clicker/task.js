const countElement = document.getElementById('clicker__counter');
const cookieImg = document.getElementById('cookie');

let clicks = 0;

let zoomImg = true;
const sizeImg = 200;
const changeSizeImg = 50;

cookieImg.onclick = function () {
    clicks++;
    countElement.textContent = clicks;
    if (zoomImg) {
        cookieImg.width = sizeImg - changeSizeImg;
        cookieImg.height = sizeImg - changeSizeImg;
    } else {

        cookieImg.width = sizeImg + changeSizeImg;
        cookieImg.height = sizeImg + changeSizeImg;
    }
    zoomImg = !zoomImg;
}
