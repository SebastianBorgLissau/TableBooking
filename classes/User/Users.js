
class user {
    constructor (fullName, email, password, phone) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    createAlert() {
        alert("Hi " + document.getElementById("fullName").value + " you have been registered");
    }
}

function addUserInfo (check, requirementsPassword, password, requirementsEmail, email, requirementsPhone, phone, info) {



        check = localStorage.length;
        requirementsPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^(?!@)[a-zA-Z\d]{8,}$/;
        password = document.getElementById("password");
        requirementsEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        email = document.getElementById("email");
        requirementsPhone =/^\d{8}$/;
        phone = document.getElementById("phoneNumber");

        info = new user(document.getElementById("fullName").value, document.getElementById("email").value,
        document.getElementById("password").value, document.getElementById("phoneNumber").value);

    function storeLogin (values) {

        values = JSON.parse(localStorage.getItem("info"));
        if (values === null) {
            values = [];
        }
        values.push(info);
        localStorage.setItem("info", JSON.stringify(values));
    }

        if(document.getElementById("fullName").value !== "") {
            document.getElementById("fullName").style.border = "none";
            document.getElementById("fullNameValidation").innerHTML = "";
        } else {
            document.getElementById("fullName").style.border = "1px solid red";
            document.getElementById("fullNameValidation").innerHTML="Please fill out";
        }

        if(password.value.match(requirementsPassword)) {
            document.getElementById("password").style.border = "none";
            document.getElementById("passwordValidation").innerHTML = "";
        } else {
            document.getElementById("password").style.border = "1px solid red";
            document.getElementById("passwordValidation").innerHTML="Password must contain at least eight characters, " +
                "one uppercase letter, one lowercase letter and one number";
        }

            if(email.value.match(requirementsEmail))
            {
                document.getElementById("email").style.border = "none";
                document.getElementById("emailValidation").innerHTML="";


            } else {
                document.getElementById("email").style.border = "1px solid red";
                document.getElementById("emailValidation").innerHTML="Please enter valid email";
            }

            if(phone.value.match(requirementsPhone))
            {
                document.getElementById("phoneValidation").innerHTML ="";
                document.getElementById("phoneNumber").style.border = "none";
            } else {
                document.getElementById("phoneValidation").innerHTML ="Please enter valid phone number";
                document.getElementById("phoneNumber").style.border = "1px solid red";

            }

    if(password.value.match(requirementsPassword) === null || email.value.match(requirementsEmail) === null || phone.value.match(requirementsPhone) === null)
    {
        return false;
    }

if (info.email ==""|| info.password =="" || info.phone =="" || info.fullName =="")
{
    return false;
}

    if (info.email !== "" && info.password !== "" && check === 0) {

        storeLogin();
        alert("New user has been created");
        window.location.replace("loginPage.html");

    } else if (info.email !== "" && info.password !== "" &&
        localStorage.getItem("info").indexOf(document.getElementById("email").value) == -1)
    {
        storeLogin();
        new user().createAlert();
        window.location.replace("loginPage.html");
        return false;

    } else {
        alert("ERROR: User already exists");
        return false;
    }

}

function checkIfLoginIsCorrect1(userArray, username, password) {

        userArray = JSON.parse(localStorage.getItem("info"));
        username = document.getElementById("enteredName").value;
        password = document.getElementById("enteredPassword").value;

    if (localStorage.length === 0) {
        alert("User not registered");
        return false;
    }

    if (username == "" || password == "") {
        alert("please fill out all forms");
        return false;
    }


    for (var i = 0; i < userArray.length; i++) {
        console.log(userArray[i].email);
        console.log(userArray[i].password);

        if (username == userArray[i].email && password == userArray[i].password) {
            alert("Email and password correct");
            currentUser1();
            window.location.replace("Index2.html");
            return false;
        }
    }
    alert("wrong email or password");
    return false;

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

class adminUser {
    constructor (adminUserName, adminPassword) {
        this.adminUserName = adminUserName;
        this.adminPassword = adminPassword
    }
}


var adminUser1 = new adminUser("admin1", "1234");

function AdminUser () {
    localStorage.setItem("adminUser", JSON.stringify(adminUser1));

}



function currentUser1 () {

    let index, inputName, currentUserArray,
        info = JSON.parse(localStorage.getItem("info"));
    inputName = document.getElementById("enteredName").value;
    currentUserArray = [];

    index = info.findIndex(x => x.email === inputName);
    // it's the same as: function(x) { return x.prop2 == "inputName" }

    console.log(info[index]);

    currentUserArray.push(info[index]);

    localStorage.setItem("current_user", JSON.stringify(currentUserArray));
    //localStorage.setItem("identifier", inputName);
    sessionStorage.setItem("loggedIn", "true");
}





