const setup = () => {
    let staatKip = document.getElementById("staatKip")
    let letter = document.getElementById("letter")

    staatKip.addEventListener("change", updateStaat);
    letter.addEventListener("change", updateLetter);



}

const updateStaat = () => {
    let staatKip = document.getElementById("staatKip").value;
    let foto = document.getElementById("fotoKip")

    if (staatKip === "kip")
    {
        foto.src = "without-egg.png"
    }
    else if (staatKip === "ei")
    {
        foto.src = "with-egg.png"
    }
    else
    {
        foto.hidden = "";
    }
}

const  updateLetter = () => {
    let letter = document.getElementById("letter")



}

window.addEventListener("load", setup);