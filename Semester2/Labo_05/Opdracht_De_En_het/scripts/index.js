const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let nieuweTekst = "";
    let i = 0;

    while (i < tekst.length) {
        if (tekst.substring(i, i + 4) === " de ") {
            nieuweTekst += " het ";
            i += 4;
        } else {
            nieuweTekst += tekst[i];
            i++;
        }
    }

    console.log(nieuweTekst);
};

window.addEventListener("load", setup);
