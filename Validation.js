
function currentUser1 () {

    var enteredName1 = document.getElementById("enteredName");
    localStorage.setItem("current_user", enteredName1.value);

}


function checkIfLoginIsCorrect1() {

    var check2 = localStorage.length;

    if(check2 === 0) {
        alert("User not registered");
        return false;
    }

    if (localStorage.getItem("info").indexOf(document.getElementById("enteredName").value) === -1
        || localStorage.getItem("info").indexOf(document.getElementById("enteredPassword").value) === -1)
    {
        alert("Wrong email or password");


    } else {

        alert("Email and password correct");
        localStorage.setItem("loggedIn", "true");
        currentUser1();
        window.location.replace("Index2.html");
        return false;
    }
}


function logout() {

    var lg = confirm("Are you sure you want to log out?");

    if(lg === true) {
        localStorage.removeItem("loggedIn");
       window.location.replace("loginPage.html");
        // window.location = "loginPage.html";

    } else {
        return false;
    }

}


