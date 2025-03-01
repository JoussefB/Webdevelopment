const setup = () => {
    const displayButton = document.getElementById('button');
    displayButton.addEventListener('click', printOnConsole);
}

const printOnConsole = () => {
    let inputText = document.getElementById('inputText').value;
    let spacedText = inputText.split('').join(' ');
    console.log(spacedText);
    let output = document.getElementById("output")
    output.textContent = spacedText;

}
window.addEventListener('load', setup);