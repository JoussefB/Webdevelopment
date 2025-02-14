const setup = () => {
    let knop = document.getElementById("wijzig")
    knop.addEventListener("click",button)
}
const button = () =>{
    let pElement = document.getElementById("txtOutput")
    pElement.textContent = "Welkom!"
}

window.addEventListener("load", setup);


