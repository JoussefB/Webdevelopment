const setup = () => {
    document.getElementById("toonResultaat").addEventListener("click", toonResultaat);
}

function toonResultaat() {
    let isRoker = document.getElementById("isRoker").checked;
    let moedertaalElement = document.querySelector('input[name="moedertaal"]:checked');
    let favorieteBuurland = document.getElementById("favorieteBuurland").value;
    let bestelling = Array.from(document.getElementById("bestelling").selectedOptions).map(option => option.value);

    console.clear();

    if (isRoker) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    let moedertaal;
    if (moedertaalElement) {
        moedertaal = moedertaalElement.value;
    } else {
        moedertaal = "niet geselecteerd";
    }
    console.log("moedertaal is " + moedertaal);

    console.log("favoriete buurland is " + favorieteBuurland);

    let bestellingTekst = "bestelling bestaat uit ";
    if (bestelling.length > 0) {
        bestellingTekst += bestelling.join(" ");
    } else {
        bestellingTekst += "niets";
    }
    console.log(bestellingTekst);
}

window.addEventListener("load", setup);
