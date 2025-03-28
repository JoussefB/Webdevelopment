const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = (AANTAL_HORIZONTAAL * AANTAL_VERTICAAL) / 2;

const kaarten = [];
let geselecteerd = [];
let isBusy = false;

const clickSound = new Audio('sounds/click.mp3');
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');


const setup = () => {
    const grid = document.querySelector('.grid');
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${AANTAL_HORIZONTAAL}, 100px)`;
    grid.style.gridTemplateRows = `repeat(${AANTAL_VERTICAAL}, 100px)`;
    grid.style.gap = "10px";

    for (let i = 1; i <= AANTAL_KAARTEN; i++) {
        kaarten.push(`images/kaart${i}.jpg`, `images/kaart${i}.jpg`);
    }
    kaarten.sort(() => Math.random() - 0.5);

    kaarten.forEach(kaart => {
        const div = document.createElement('div');
        div.classList.add('kaart');
        div.dataset.kaart = kaart;
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.backgroundImage = "url('images/achterkant.jpg')";
        div.style.backgroundSize = "cover";
        div.style.cursor = "pointer";

        div.addEventListener('click', draaiKaartOm);
        grid.appendChild(div);
    });
};


const draaiKaartOm = (event) => {
    if (isBusy) return;

    const kaart = event.target;
    if (kaart.classList.contains('open')) return;

    clickSound.play();
    kaart.style.backgroundImage = `url(${kaart.dataset.kaart})`;
    kaart.classList.add('open');
    geselecteerd.push(kaart);

    if (geselecteerd.length === 2) {
        isBusy = true;
        setTimeout(controleren, 1000);
    }
};

const controleren = () => {
    if (geselecteerd[0].dataset.kaart === geselecteerd[1].dataset.kaart) {
        correctSound.play();
        geselecteerd.forEach(kaart => kaart.style.visibility = 'hidden');
    } else {
        wrongSound.play();
        geselecteerd.forEach(kaart => {
            kaart.style.backgroundImage = "url('images/achterkant.jpg')";
            kaart.classList.remove('open');
        });
    }

    geselecteerd = [];
    isBusy = false;
};

window.addEventListener("load", setup);
