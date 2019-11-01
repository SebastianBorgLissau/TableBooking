
function validatePasswordAndEmail () {


   // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    var requirementsPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var password = document.getElementById("password");

    var requirementsEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email");




     if(email.value == "") {
         document.getElementById("emptyEmail").innerHTML = "*Please fill in email*";
     }

    if(password.value == "") {
        document.getElementById("emptyPassword").innerHTML = "*Please fill in password*";

        return false;
    }

    if(password.value.match(requirementsPassword))
    {

    } else {
        document.getElementById("demo").innerHTML="*Password must contain at least eight characters, " +
            "one uppercase letter, one lowercase letter and one number*";
        return false;
    }

    if(email.value.match(requirementsEmail)) {
        storeLogin()
    } else {
    }
}



