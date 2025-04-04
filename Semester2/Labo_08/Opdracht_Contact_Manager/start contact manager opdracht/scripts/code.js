let global = {
    personen: [],
    huidigePersoonIndex: -1
};

const setup = () => {
    let bewaarKnop = document.getElementById("btnBewaar");
    bewaarKnop.addEventListener("click", bewaarBewerktePersoon);

    let nieuwKnop = document.getElementById("btnNieuw");
    nieuwKnop.addEventListener("click", bewerkNieuwePersoon);

    let verwijderKnop = document.getElementById("btnVerwijder");
    verwijderKnop.addEventListener("click", verwijderPersoon);

    let sorteerKnop = document.getElementById("btnSorteer");
    sorteerKnop.addEventListener("click", sorteerPersonen);

    let lijst = document.getElementById("lstPersonen");
    lijst.addEventListener("change", (event) => {
        const selectedIndex = event.target.selectedIndex;
        if (selectedIndex !== -1) {
            laadPersoonInFormulier(selectedIndex);
        }
    });
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    valideer();

    const errors = document.querySelectorAll('.invalid');
    if (errors.length > 0) {
        return;
    }

    const persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value.trim())
    };

    if (global.huidigePersoonIndex === -1) {
        global.personen.push(persoon);
        global.huidigePersoonIndex = global.personen.length - 1;
    } else {
        global.personen[global.huidigePersoonIndex] = persoon;
    }

    updatePersonenLijst();
    selecteerHuidigePersoon();
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    resetFormulier();
    global.huidigePersoonIndex = -1;
    deselecteerPersonen();
};

const verwijderPersoon = () => {
    if (global.huidigePersoonIndex === -1) {
        alert("Selecteer eerst een persoon om te verwijderen");
    }
    else
    {
        global.personen.splice(global.huidigePersoonIndex, 1);
        updatePersonenLijst();
        resetFormulier();
        global.huidigePersoonIndex = -1;
    }
};

const sorteerPersonen = () => {
    global.personen.sort((a, b) => {
        const naamA = `${a.familienaam} ${a.voornaam}`.toLowerCase();
        const naamB = `${b.familienaam} ${b.voornaam}`.toLowerCase();
        return naamA.localeCompare(naamB);
    });

    updatePersonenLijst();
    selecteerHuidigePersoon();
};

const updatePersonenLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";

    global.personen.forEach((persoon, index) => {
        const option = document.createElement("option");
        option.value = index.toString();
        option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        lstPersonen.appendChild(option);
    });
};

const laadPersoonInFormulier = (index) => {
    if (index >= 0 && index < global.personen.length) {
        const persoon = global.personen[index];
        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;

        clearAllErrors();
        global.huidigePersoonIndex = index;
    }
};

const resetFormulier = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors();
};

const deselecteerPersonen = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;
};

const selecteerHuidigePersoon = () => {
    if (global.huidigePersoonIndex >= 0) {
        const lstPersonen = document.getElementById("lstPersonen");
        lstPersonen.selectedIndex = global.huidigePersoonIndex;
    }
};

window.addEventListener("load", setup);