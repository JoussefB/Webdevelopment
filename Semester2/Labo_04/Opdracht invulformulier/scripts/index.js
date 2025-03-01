const setup = () => {
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
}

window.addEventListener('load', setup);