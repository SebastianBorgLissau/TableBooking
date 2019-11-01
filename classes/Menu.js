function validatePassword () {


    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    var requirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var password = document.getElementById("password");

    if(password.value.match(requirements))
    {
        storeLogin();
    } else {
        alert("password not allowed");
    }

}