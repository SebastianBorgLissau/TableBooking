//User Class
// henter oplysninger fra register-side

var email1 = document.getElementById(email1);
var name1 =  document.getElementById(name1);
var password1 = document.getElementById(password1);

//funktion der gemmer oplysninger fra register-side i localstorage

function storeInformation() {

    localStorage.setItem("email1", email1.value);
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('password1', password1.value);
}

//checker om indtastede oplsyninger matcher med oplysninger gemt i localstorage

function checkInformation() {
    // henter oplysninger fra register-form

    var storedEmail1 = document.getElementById(email1);
    var storedName1 =  document.getElementById(name1);
    var storedPasssword1 = document.getElementById(password1);

    // henter gemte oplysninger fra localstorage

    localStorage.getItem("userName", email1.value);
    localStorage.getItem('userPassword', name1.value);

    //tjekker om oplysninger i localstorage matcher indtastede oplsyninger

    if(email1.value !== storedName1 || password1.value !== password1) {
        {
            alert("ERROR password or email not correct");
        } else {
            alert("You are logged in");
        }
    }




}

