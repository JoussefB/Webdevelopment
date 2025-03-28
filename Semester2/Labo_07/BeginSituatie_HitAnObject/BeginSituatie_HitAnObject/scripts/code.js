let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let image = document.getElementsByClassName('image')[0]
    let startButton = document.getElementById('startGame'); // Selecteer de startknop

    startButton.addEventListener('click', startSpel)
    image.addEventListener('click', clickImage);
};

const startSpel = () => {
    setInterval(MoveImage,global.MOVE_DELAY,global.timeoutId)


}

const clickImage = () => {
    let image= document.getElementsByClassName('image')[0]
    if (image.src.split("/").pop() === "0.png")
    {
        window.alert("BOOOOM BOOOOM BOOOOM BOOOOM BOOOOOOOOOOOOOOOM!")
    }
    else {
        MoveImage()
        let score = document.getElementsByClassName('aantalHits')[0]
        console.log(score)
        global.score = global.score +1
        console.log(score.textContent = global.score)

    }
}

const MoveImage = () => {
    let image= document.getElementsByClassName('image')[0]
    let speelveld= document.getElementById("playField");
    let maxLeft=speelveld.clientWidth - image.offsetWidth;
    let maxHeight=speelveld.clientHeight - image.offsetHeight;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    image.style.left=left+"px";
    image.style.top=top+"px";

    image.src = "images/" + (Math.round(Math.random()*4) )+ ".png"

}





window.addEventListener("load", setup);


