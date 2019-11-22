//Class of admin user

class adminUser {
    // Attributes to admin class
    constructor (adminUsername, adminPassword) {
        this.adminUsername = adminUsername;
        this.adminPassword = adminPassword;
    }
}

//Creates Admin as a predefined user
var admin = new adminUser("adminbruger", "admin1234");

//Defines array with all admin users
var adminArray = JSON.parse(localStorage.getItem("allAdminUsers"));

//Pushes admin to array
adminArray.push(admin);

localStorage.setItem("allAdminUsers", JSON.stringify(adminArray));

//Push admin user to admin array
//adminArray.push(admin);

//Console log to view if admin is pushed to array correctly.
//console.log(adminArray);

//Console.log which checks if admin is defined correctly
console.log(document.getElementById("demo").innerHTML = "Admin username and password is " + admin.adminUsername + admin.adminPassword);




function checkIfAdminLoginIsCorrect() {

    var LScheck = localStorage.length;
    var AdminInfo = localStorage.getItem("allAdminUsers");

    if(LScheck === 0) {
        alert("User not registered");
        return false;
    }

    if(document.getElementById("enteredPassword").value == "" || document.getElementById("enteredName").value == "") {
        alert("please fill out all forms");
        return false;
    }

    if (AdminInfo.indexOf(document.getElementById("enteredName").value) === -1 || AdminInfo.indexOf(document.getElementById("enteredPassword").value) === -1)
    {
        alert("Wrong username or password");
        return false;

    } else {

        alert("Email and password correct");
        localStorage.setItem("loggedIn", "true");
        window.location.replace("AdminPage.html");
        return false;
    }
}

/*
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
function logout() {
    var lg = confirm("Are you sure you want to log out?");
    if(lg === true) {
        localStorage.removeItem("loggedIn");
        window.location.replace("loginPage.html");
        // window.location = "loginPage.html";
    } else {
        return false;
    }
}*/