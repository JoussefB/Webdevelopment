const setup = () => {

    let belangrijk = document.getElementsByClassName("belangrijk")
    let index = belangrijk.length;
    let i = 0;
    while( i < index)
    {
        belangrijk[i].className += " opvallend";
        i++;
    }
}


window.addEventListener("load", setup);

