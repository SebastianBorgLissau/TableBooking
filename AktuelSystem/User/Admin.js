//Class of admin user

class adminUser {
    // Attributes to admin class
    constructor (adminUserName, adminPassword) {
        this.adminUserName = adminUserName;
        this.adminPassword = adminPassword
    }
}

//Creates Admin as a predefined user
var adminKey = new adminUser("admin", "admin");

/*Adds admin to local storage
function AdminUserToLS () {
    localStorage.setItem("adminUser", JSON.stringify(adminUser));

}
 */

function storeLogin (values) {

    values = JSON.parse(localStorage.getItem("adminKey"));
    if (values === null) {
        values = [];
    }
    values.push(values);
    localStorage.setItem("adminKey", JSON.stringify(values));
}
storeLogin();

function checkIfLoginIsCorrect() {

    var check = localStorage.length;
    var adminInfo = localStorage.getItem("admin");

    if(check === 0) {
        alert("User not registered");
        return false;
    }

    if(document.getElementById("enteredPassword").value == "" || document.getElementById("enteredName").value == "") {
        alert("please fill out all forms");
        return false;
    }

    if (adminInfo.indexOf(document.getElementById("enteredName").value) === -1 || info.indexOf(document.getElementById("enteredPassword").value) === -1)
    {
        alert("Wrong email or password");
        return false;

    } else {

        alert("Email and password correct");
        localStorage.setItem("loggedIn", "true");
        //currentUser1();
        window.location.replace("AdminPage.html");
        return false;
    }
}

/*
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
 */