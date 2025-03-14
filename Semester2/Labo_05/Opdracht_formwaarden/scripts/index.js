const setup = () => {
    document.getElementById("toonResultaat").addEventListener("click", toonResultaat);
}

function toonResultaat() {
    let isRoker = document.getElementById("isRoker").checked;
    let moedertaalElement = document.querySelector('input[name="moedertaal"]:checked');
    let favorieteBuurland = document.getElementById("favorieteBuurland").value;
    let bestelling = Array.from(document.getElementById("bestelling").selectedOptions).map(option => option.value);

    console.clear(); // Console opschonen voor een overzichtelijke output

    // Is roker
    if (isRoker) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    // Moedertaal
    let moedertaal;
    if (moedertaalElement) {
        moedertaal = moedertaalElement.value;
    } else {
        moedertaal = "niet geselecteerd";
    }
    console.log("moedertaal is " + moedertaal);

    // Favoriete buurland
    console.log("favoriete buurland is " + favorieteBuurland);

    // Bestelling
    let bestellingTekst = "bestelling bestaat uit ";
    if (bestelling.length > 0) {
        bestellingTekst += bestelling.join(" ");
    } else {
        bestellingTekst += "niets";
    }
    console.log(bestellingTekst);
}

// Zorg ervoor dat setup wordt uitgevoerd wanneer de pagina volledig is geladen
window.addEventListener("load", setup);
