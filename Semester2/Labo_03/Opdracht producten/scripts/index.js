const setup = () => {


}
function recalculate() {
    let totaal = 0;
    const rows = document.querySelectorAll("table tr");

    rows.forEach((row, index) => {
        if (index > 0 && index < rows.length - 1) {  // Skip header and total row
            let prijs = parseFloat(row.querySelector(".prijs").textContent);
            let aantal = parseFloat(row.querySelector(".aantal").value);
            let btw = parseFloat(row.querySelector(".btw").textContent.replace('%', '')) / 100;
            let subtotaal = (prijs * aantal) * (1 + btw);

            row.querySelector(".subtotaal").textContent = subtotaal.toFixed(2) + " Eur";
            totaal += subtotaal;
        }
    });

    document.getElementById("totaal").textContent = totaal.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);