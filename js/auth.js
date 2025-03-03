//Step: 1
function handleRegistration() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (!name || !email || !password) {
        alert('All Fields Are Required...')
        return;
    }
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user))
    alert('User Registered Successfully..! Now You can Login!!..');
    window.location.href = "login.html"
}

//Step: 2
function handleLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('User loggedIn Successfully...');
        console.log('Redirecting to index.html...');
        window.location.href = 'index.html'
    }
    else {
        alert('Invalid Credentials...')
    }
}


//Step:3
function updateNavbarForLoggedInUser(name) {
    const authButtons = document.getElementById("authButtons");
    if (authButtons) {
        authButtons.innerHTML =
            `
        <button class="btn btn-primary bi bi-person">${name}</button>
        <button class="btn btn-primary" onclick="logout()" >Logout</button>
        `
    }
}


//Step: 4
window.onload = function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        updateNavbarForLoggedInUser(user.name)
        if (window.location.pathname.includes('login.html')) {
            window.location.href = 'index.html'
        }
    }
}


//Step:5
function logout() {
    localStorage.removeItem('loggedInUser');
    alert('You have been logout Successfully..');
    window.location.href = 'login.html'
}