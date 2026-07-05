const holeDead = document.getElementById('dead');
const holeLost = document.getElementById('lost');
let countDead = 0;
let countLost = 0;

function updatePage() {
    holeDead.textContent = countDead;
    holeLost.textContent = countLost;
}

function resetPage() {
    countDead = 0;
    countLost = 0;
    updatePage();
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {
        if (this.classList.contains('hole_has-mole')) {
            countDead++;
            alert('Попадание');
        } else {
            countLost++;
            alert('Мимо');
        }
        resetPage();
    }
    
}
