const setup = () => {
    let verjaardag = new Date(2025,8,6)
    let vandaag = new Date()
    let verschilDatums = verjaardag.getTime() - vandaag.getTime()
    verschilDatums = verschilDatums / 1000 / 60 / 60 / 24
    verschilDatums = Math.floor(verschilDatums)
    console.log("Nog " + verschilDatums + " dagen voordat ik jarig ben.")
}

window.addEventListener("load", setup);