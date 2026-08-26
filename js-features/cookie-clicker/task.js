const cookie = document.getElementById("cookie");
const countUp = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("clicker__speed");

let lastClickTime = 0;
let clicks = 0;

function clickCookie() {

    clicker__counter.textContent++;

    if (cookie.width === 250) {
        cookie.width = 200;
    } else {
    cookie.width = 250;
    }

    const now = Date.now();
    clicks++;
    if (lastClickTime > 0) {
        const timeClicked = now - lastClickTime;
        const speed = timeClicked/1000;
        clicker__speed.textContent = speed.toFixed(2);
    }
    lastClickTime = now;

}
        
cookie.onclick = clickCookie;