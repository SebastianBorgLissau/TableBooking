// Username and Password for the registration form

var username = document.getElementById('email');
var password = document.getElementById('password');

// Store input from registration form in localStorage
function storeLogin() {
    localStorage.setItem('email', username.value);
    localStorage.setItem('password', password.value);
    alert('New user has been created.');
}




// Function to check if the stored data from the registration form is equal to the entered data in the login form
function checkLogin() {

    // Stored data from the registration form
    var storedName = localStorage.getItem('email');
    var storedPass = localStorage.getItem('password');


    // Entered data in the login form
    var enteredName = document.getElementById('enteredName');
    var enteredPass = document.getElementById('enteredPass');


    // Check if stored data from registration form is equal to entered data from login form
    if (enteredName.value == storedName && enteredPass.value == storedPass) {

        window.location = "index.html";

        localStorage.setItem("loggedIn", "true");

    } else {
        alert('Incorrect name or password. Press "register" to create a new user');

    }
}