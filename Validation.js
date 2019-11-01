

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

function index1() {

    localStorage.removeItem("item1");

    if (localStorage.length < 3) {
        var ms = confirm("Do you really want to leave?");

        if (ms === true) {
            localStorage.removeItem("loggedIn");
            window.location.replace("loginPage.html");
        }

    }


}



function testPages() {
    // Broad cast that your're opening a page.
    localStorage.openpages = Date.now();

    var onLocalStorageEvent = function(e){
        if(e.key == "openpages"){
            // Listen if anybody else opening the same page!
            localStorage.page_available = Date.now();
        }
        if(e.key == "page_available"){


        }
    };
    window.addEventListener('storage', onLocalStorageEvent, false);

}

class page {
    constructor(key, value) {
        this.key = key;
        this.value = value;

    }
}

var page1 = new page(page1, 1);
var page2 = new page(page2, 2);