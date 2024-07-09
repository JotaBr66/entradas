
const loginSection = document.getElementById('loginSection');
const ticketSection = document.getElementById('ticketSection');
const loginForm = document.getElementById('loginForm');
const ticketForm = document.getElementById('ticketForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'anderson' && password === '12345678') {
        loginSection.style.display = 'none';
        ticketSection.style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
    }
});

ticketForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const ticketType = document.getElementById('ticketType').value;

    alert("Gracias por comprar la entrada "+ticketType+" "+fullName);
});
