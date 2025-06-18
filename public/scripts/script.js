document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulasi proses login
    alert(`Welcome, ${username}!`);
});