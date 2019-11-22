//Defines booking class
class Booking {

    //Creates constructor with class attributes
    constructor(bookingNumber, seatsChosen, date, time, user) {

        this.bookingNumber = bookingNumber;
        this.seatsChosen = seatsChosen;
        this.date = date;
        this.time = time;
        this.user = user;
    }
    //Adds method to class, that gets called when a new booking is successful
    bookingAlert() {
        alert("you have made a new booking");

    }

    //Adds method to class, that gets called when a deletion of a booking is successfully executed
    bookingAlertDelete () {
        alert("Booking " + document.getElementById("deleteB").value + " succesfully deleted");
    }

    //Adds method to class, that gets called when delete-input is empty
    bookingAlertDeleteEmpty () {
        alert("type the number of the booking you want to delete")
    }
}


//Function, that stores a booking in LocalStorage
function setBooking() {

    //If statement which prompts a confirmation and returns true/false depending on user input if all conditions of a booking is met.
    if (confirm('Are you sure, you want to make a booking?')) {
        // Save it!

        //Defines booking variable as an object and retrieves items for "Bookings"
        let bookingArray = JSON.parse(localStorage.getItem("bookings"));

        //Defines global scope for all variables
        var bookingNumber, seats, date, timeSelector, time, userId, bookings, values;

        //If statement that assigns a number to a booking and increases by 1 for each booking made
    if (bookingArray == null) {
        bookingNumber = 1;
    } else {
        bookingNumber = bookingArray.length + 1;
    }
        //Retrieves user input from HTML page
        seats = document.getElementById("tableSeats").value;

        date = document.getElementById("datestring").innerHTML;

        timeSelector = document.getElementById("time");
        time = timeSelector.options[timeSelector.selectedIndex].value;

        userId = localStorage.getItem("current_user");

        //Instantiation of new objects for booking class
        bookings = new Booking(bookingNumber, seats, date, time, userId);

        //Defines values variable and retrives data from LocalStorage (Erstat med "BookingArray?)
        values = JSON.parse(localStorage.getItem("bookings"));

        //If statement which checks if LocalStorage item bookings is empty and creates a new empty array.
       if (values === null) {
           values = [];
       }
       //Pushes values of bookings into empty array
        values.push(bookings);

       //Stores key bookings with the value of values array
        localStorage.setItem("bookings", JSON.stringify(values));

       //Calls method bookingAlert from booking class.
      new Booking().bookingAlert();

      //Redirects to booking confirmation page when booking is created
      window.location.replace("bookingConfirmation.html");
      return false;
        //  alert("new booking made");
    }
}

function deleteBooking() {


        let bookings = JSON.parse(localStorage.getItem("bookings"));
        // let inputName = prompt("Type in the number of the booking you want to delete");
        let iName = document.getElementById("deleteB").value;
        let user = localStorage.getItem("current_user");
        let indexArray = [];

    var select = document.getElementById("test");


        for (var i = 0; i < bookings.length; i++) {
            console.log(bookings[i]);

            if (bookings[i].bookingNumber == iName) {
                console.log("found");
                indexArray.push(bookings[i]);
                var option = document.createElement("option");
                option.value = bookings[i];
                option.innerHTML = bookings[i];
                select.appendChild(option);

            } else {
                console.log("not found")
            }
        }


function displayBookingsToDelete() {


}



        // var yb = bookings.findIndex (x => x.user == user);
        var ib = bookings.findIndex(x => x.bookingNumber == iName);
        var ob = indexArray.findIndex(x => x.user == user);


        if (iName == "") {
            new Booking().bookingAlertDeleteEmpty();
            //alert("type the number of the booking you want to delete");
            return false;
        }

        if (ib === undefined) {
            alert("you have no bookings");
            return false;
        }

        if (ib !== -1 && ob !== -1) {
            if (confirm("Are you sure you want to delete booking " + document.getElementById("deleteB").value+"?")) {
                console.log(ib);
                bookings.splice(ib, 1);
                localStorage.setItem('bookings', JSON.stringify(bookings));
                // alert("booking successfully deleted");
                new Booking().bookingAlertDelete();
                location.reload();
            }
        } else {
            alert("booking does not exist");
            return false;
        }
}

function myBookings() {
    let i,
        bookings = JSON.parse(localStorage.getItem("bookings")), //skiftes ud med booking
        inputName =localStorage.getItem("current_user"), //skiftes ud med identifier
        bookingArray = [];

    for(i = 0; i < bookings.length; i++) {
        console.log(bookings[i]);

        if (bookings[i].user == inputName) {
            console.log("found");
            bookingArray.push(bookings[i]);
        } else {
            console.log("not found")
        }
    }

    let row, cell, text, r, c,
        prop = ['bookingNumber','seatsChosen', 'date', 'time'], //navne-properties under bookings, som for loop med var c henter værdier fra
        table = document.getElementById("myList1"),
        data = bookingArray;

    for (r = 0; r < data.length; r++) {
        row = document.createElement('tr'); // tr = table rows. Looper over bookingArray og laver rækker for hvert element i arrayet

        //laver 4 celler
        for (c = 0; c < 4; c++) {
            //  header = (document.createTextNode(tableHeader[c]));

            cell = document.createElement('td'); //td =table data. Laver celler i tabel
            text = document.createTextNode(data[r][prop[c]]); //laver række for hvert element: data[r], og inden i rækken laves celler med de værdier der tilhører propertiesene i bookingArray [prop[c]].
            cell.appendChild(text); //indsætter data i cellen
            row.appendChild(cell);  //indsætter celler i rækker
            //table.appendChild(header);
        }
        //table.appendChild(createTable);
        table.appendChild(row); //indsætter tabel i dokument
    }
}


function myInformation() {
    let information =JSON.parse(localStorage.getItem("current_user")), //skiftes ud med identifier
        infoArray = [];

    infoArray.push(information[0]);

    let row, cell, text, r, c,
        prop = ['fullName', "email", "phone"], //navne-properties under bookings, som for loop med var c henter værdier fra
        table = document.getElementById("myInformation"),
        data = infoArray;

    for (r = 0; r < data.length; r++) {
        row = document.createElement('tr'); // tr = table rows. Looper over bookingArray og laver rækker for hvert element i arrayet

        //laver 3 celler
        for (c = 0; c < 3; c++) {
            //  header = (document.createTextNode(tableHeader[c]));

            cell = document.createElement('td'); //td =table data. Laver celler i tabel
            text = document.createTextNode(data[r][prop[c]]); //laver række for hvert element: data[r], og inden i rækken laves celler med de værdier der tilhører propertiesene i bookingArray [prop[c]].
            cell.appendChild(text); //indsætter data i cellen
            row.appendChild(cell);  //indsætter celler i rækker
            //table.appendChild(header);
        }
        //table.appendChild(createTable);
        table.appendChild(row); //indsætter tabel i dokument
    }
}

function displayInfo() {
    myInformation();
    myBookings();
}