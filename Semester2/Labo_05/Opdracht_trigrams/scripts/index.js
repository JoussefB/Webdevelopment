function setup() {
    let woord = "onoorbaar";
    let i = 0;
    while (i < woord.length) {
        if (woord.substring(i, i+3).length === 3) {
            console.log(woord.substring(i, i+3));
        }
        i++;
    }
}

window.addEventListener("load", setup);