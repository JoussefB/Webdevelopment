const setup = () => {
    const valideerKnop = document.querySelector('button');
    valideerKnop.addEventListener('click', valideerFormulier);
};

window.addEventListener("load", setup);

function valideerFormulier(event) {
    event.preventDefault();
    resetErrors();

    let isValid = true;

    const voornaam = document.getElementById('voornaam').value.trim();
    if (voornaam.length > 30) {
        setError('voornaam', 'max. 30 karakters');
        isValid = false;
    }

    const familienaam = document.getElementById('familienaam').value.trim();
    if (!familienaam) {
        setError('familienaam', 'verplicht veld');
        isValid = false;
    } else if (familienaam.length > 50) {
        setError('familienaam', 'max 50 karakters');
        isValid = false;
    }

    const geboortedatum = document.getElementById('geboortedatum').value.trim();
    const datumPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!geboortedatum) {
        setError('geboortedatum', 'verplicht veld');
        isValid = false;
    } else if (!datumPattern.test(geboortedatum)) {
        setError('geboortedatum', 'formaat is niet jjjj-mm-dd');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (!email) {
        setError('email', 'verplicht veld');
        isValid = false;
    } else if (!email.includes('@') || email.split('@').length !== 2 || email.split('@')[0].length < 1 || email.split('@')[1].length < 1) {
        setError('email', 'geen geldig email adres');
        isValid = false;
    }

    const aantalKinderen = document.getElementById('aantalKinderen').value.trim();
    if (!isGetal(aantalKinderen)) {
        setError('aantalKinderen', 'is geen positief getal');
        isValid = false;
    } else {
        const aantal = parseInt(aantalKinderen, 10);
        if (aantal < 0) {
            setError('aantalKinderen', 'is geen positief getal');
            isValid = false;
        } else if (aantal >= 99) {
            setError('aantalKinderen', 'is te vruchtbaar');
            isValid = false;
        }
    }

    if (isValid) {
        alert('proficiat!');
    }
}

function setError(fieldId, message) {
    document.getElementById(fieldId).classList.add('error');
    document.getElementById(fieldId + 'Error').textContent = message;
}

function resetErrors() {
    const fields = ['voornaam', 'familienaam', 'geboortedatum', 'email', 'aantalKinderen'];
    fields.forEach(field => {
        document.getElementById(field).classList.remove('error');
        document.getElementById(field + 'Error').textContent = '';
    });
}

function isGetal(tekst) {
    return !isNaN(tekst);
}