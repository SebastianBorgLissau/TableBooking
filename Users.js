


function addUserInfo () {
    var courseArray = [];
    var info = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        phone: document.getElementById("phoneNumber").value,
    };

    var check = localStorage.length;

    var requirementsPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^(?!@)[a-zA-Z\d]{8,}$/;
    var password = document.getElementById("password");

    var requirementsEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email");

    var requirementsPhone =/^\d{8}$/;
    var phone = document.getElementById("phoneNumber");


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

        courseArray = JSON.parse(localStorage.getItem("info")) || [];

        courseArray.push(info);

        localStorage.setItem("info", JSON.stringify(courseArray));

        courseArray = localStorage.getItem("info");

        courseArray = JSON.parse(courseArray);

        for (var i = 0; i < courseArray.length; i++) {
            console.log(courseArray[i]);
        }
        alert("New user has been created");
        window.location.replace("Login.html");

    } else if (info.email !== "" && info.password !== "" &&
        localStorage.getItem("info").indexOf(document.getElementById("email").value) == -1)
    {
        courseArray = JSON.parse(localStorage.getItem("info")) || [];

        courseArray.push(info);

        localStorage.setItem("info", JSON.stringify(courseArray));

        courseArray = localStorage.getItem("info");

        courseArray = JSON.parse(courseArray);

        for (var j = 0; j < courseArray.length; j++) {
            console.log(courseArray[j]);
        }
        alert("New user has been created");
        window.location = "Index.html";


    } else {
        alert("ERROR: User already exists");
        return false;
    }


}

