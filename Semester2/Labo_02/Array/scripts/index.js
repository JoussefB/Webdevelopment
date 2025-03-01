const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
const familieleden = ["Jan","Bob","Mark","Tom","Sam"]
console.log(familieleden.length)
console.log(familieleden[0])
console.log(familieleden[2])
console.log(familieleden[4])
function voegNaamToe()
{
    let nieuwenaam = prompt("Geef een nieuwe naam toe")
    familieleden.push(nieuwenaam);
    console.log((familieleden))
}
voegNaamToe()
console.log((familieleden.join(" - ")))
window.addEventListener("load", setup);