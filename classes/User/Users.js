
class user {
    constructor (fullName, email, password, phone) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    createAlert() {
        alert("Hi " + document.getElementById("fullName").text + " you have been registered");
    }
}


function addUserInfo () {

var check, requirementsPassword, password, requirementsEmail, email, requirementsPhone, phone, info;

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
        /*
        courseArray = JSON.parse(localStorage.getItem("info")) || [];

        courseArray.push(info);

        localStorage.setItem("info", JSON.stringify(courseArray));

        courseArray = localStorage.getItem("info");

        courseArray = JSON.parse(courseArray);

        for (var i = 0; i < courseArray.length; i++) {
            console.log(courseArray[i]);
        }*/

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
        alert("New user has been created");
        new user().createAlert();
        window.location.replace("loginPage.html");

    } else {
        alert("ERROR: User already exists");
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


