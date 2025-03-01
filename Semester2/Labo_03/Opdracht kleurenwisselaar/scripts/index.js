const setup = () => {
    let buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            if (this.style.backgroundColor === "blue") {
                this.style.backgroundColor = "white";
            } else {
                this.style.backgroundColor = "blue";
            }
        });
    }
}

window.addEventListener("load", setup);
