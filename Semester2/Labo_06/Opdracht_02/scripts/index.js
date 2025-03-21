const setup = () => {
    const items = document.querySelectorAll("li")
    let index = 0
    while (index < items.length)
    {
        items[index].className = "listitem"
        index++
    }
    const imgElement = document.createElement("img")
    imgElement.src = "images/me.jpg"
    document.body.appendChild(imgElement)



}

window.addEventListener("load", setup);