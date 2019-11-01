
//getting information from register

var username = document.getElementById(username);
var password = document.getElementById(password);

//stores information from register in localstorage

function storeInformation() {

    localStorage.setItem("email1", );
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('password1', password1.value);
    alert("New user has been created");
}


// Function to list
function showUser() {
    console.log('Show user stored in localStorage.')
    console.log(localStorage);


    //checks if information from localstorage is matching logininput

    function checkInformation() {

        var storedEmail1 = localStorage.getItem(email1);
        var storedPasssword1 = localStorage.getItem(password1);

        var userName = document.getElementById("userEmail");
        var userPassword = document.getElementById("userPassword");


        if(userName.value == storedEmail1 && userPassword.value == storedPasssword1) {
            alert('You are logged in.'); }
        else {
            alert('Error.');
        }
    }
}

