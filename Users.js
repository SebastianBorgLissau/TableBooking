

class user {
    constructor (email, password, phone) {
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}

var courseArray = [];

function addUserInfo () {

    var info = new user(document.getElementById("email").value,
        document.getElementById("password").value, document.getElementById("phoneNumber").value);

    var check = localStorage.length;

    var requirementsPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^(?!@)[a-zA-Z\d]{8,}$/;
    var password = document.getElementById("password");

    var requirementsEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email");

    var requirementsPhone =/^\d{8}$/;
    var phone = document.getElementById("phoneNumber");

    function storeLogin () {
        courseArray = JSON.parse(localStorage.getItem("info")) || [];

        courseArray.push(info);

        localStorage.setItem("info", JSON.stringify(courseArray));

        courseArray = localStorage.getItem("info");

        courseArray = JSON.parse(courseArray);

        for (var i = 0; i < courseArray.length; i++) {
            console.log(courseArray[i]);
        }
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

if (info.email ==""|| info.password =="" || info.phone =="")
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
        window.location.replace("loginPage.html");

    } else {
        alert("ERROR: User already exists");
        return false;
    }

}

function currentUser () {

    var cu = document.getElementById("enteredName");
    localStorage.setItem("currentUser","cu");

}

