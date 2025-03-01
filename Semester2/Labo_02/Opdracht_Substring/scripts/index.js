const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring")
    btnSubstring.addEventListener("click",substring)
}

const substring = () => {
    let txtInput = document.getElementById("txtInput").value
    let numberOne = parseInt(document.getElementById("numberOne").value)
    let numberTwo = parseInt(document.getElementById("numberTwo").value)
    let txtOutput = document.getElementById("txtOutput")
    txtOutput.textContent = txtInput.substring(numberOne,numberTwo)
}

window.addEventListener("load", setup)
