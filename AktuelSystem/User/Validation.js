
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

}


function checkIfLoginIsCorrect1() {

    var check2 = localStorage.length;
    var info = localStorage.getItem("info");

    if(check2 === 0) {
        alert("User not registered");
        return false;
    }

    if(document.getElementById("enteredPassword").value == "" || document.getElementById("enteredName").value == "") {
        alert("please fill out all forms");
        return false;
    }

    if (info.indexOf(document.getElementById("enteredName").value) === -1 || info.indexOf(document.getElementById("enteredPassword").value) === -1)
    {
        alert("Wrong email or password");
        return false;

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