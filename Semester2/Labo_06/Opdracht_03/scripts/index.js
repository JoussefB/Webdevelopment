const setup = () => {
    let appendButton = document.getElementById("appendButton")
    appendButton.addEventListener("click",append)
}
const append = () => {
    const pElement = document.createElement("p")
    const div = document.querySelector("div")
    pElement.textContent = "Lorem ipsum dolor sit amet"
    div.appendChild(pElement)

}

window.addEventListener("load", setup);