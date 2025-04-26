

const storeSliderValues = () => {
    let redValue = document.getElementById("sldRed").value;
    let greenValue = document.getElementById("sldGreen").value;
    let blueValue = document.getElementById("sldBlue").value;

    localStorage.setItem("redValue", redValue);
    localStorage.setItem("greenValue", greenValue);
    localStorage.setItem("blueValue", blueValue);
};


const restoreSliderValues = () => {
    let red = localStorage.getItem("redValue");
    let green = localStorage.getItem("greenValue");
    let blue = localStorage.getItem("blueValue");

    if (red !== null) {
        document.getElementById("sldRed").value = red;
    }
    if (green !== null) {
        document.getElementById("sldGreen").value = green;
    }
    if (blue !== null) {
        document.getElementById("sldBlue").value = blue;
    }

    // Trigger eventueel een update van de kleur
    document.getElementById("sldRed").dispatchEvent(new Event("input"));
    document.getElementById("sldGreen").dispatchEvent(new Event("input"));
    document.getElementById("sldBlue").dispatchEvent(new Event("input"));
};


const storeSwatches = () => {
    let swatches = document.querySelectorAll("#swatchComponents .swatch");
    let colors = [];

    swatches.forEach(swatch => {
        let red = swatch.getAttribute("data-red");
        let green = swatch.getAttribute("data-green");
        let blue = swatch.getAttribute("data-blue");

        colors.push({ red, green, blue });
    });

    localStorage.setItem("swatches", JSON.stringify(colors));
};




const restoreSwatches = () => {
    let colors = JSON.parse(localStorage.getItem("swatches"));

    if (colors) {
        colors.forEach(color => {
            addSwatchComponent(color.red, color.green, color.blue);
        });
    }
};


