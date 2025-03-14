const setup = () => {
    voegGemeenteToe();
}

const voegGemeenteToe = () => {
    let keuzelijst = document.getElementById("gemeentes");
    let stopMetToevoegen = false;
    while(stopMetToevoegen === false)
    {
        let gemeente = window.prompt("Gemeente:");
        gemeente = gemeente.trim();
        if (gemeente !== "stop")
        {
            if (gemeente) {
                let optie = document.createElement("option");
                optie.text = gemeente;
                optie.value = gemeente;
                keuzelijst.add(optie);
            }
        }
        else
        {
            stopMetToevoegen = true;
        }
    }

}

window.addEventListener("load", setup);
