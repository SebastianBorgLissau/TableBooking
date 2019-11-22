/*this is our booking booking class*/

class Booking {

    constructor(bookingNumber, seatsChosen, date, time, user) {

        this.bookingNumber = bookingNumber;
        this.seatsChosen = seatsChosen;
        this.date = date;
        this.time = time;
        this.user = user;
    }

    bookingAlert() {
        alert("you have made a new booking");

    }

    bookingAlertDelete () {
        alert("Booking " + document.getElementById("deleteB").value + " succesfully deleted");
    }

    bookingAlertDeleteEmpty () {
        alert("type the number of the booking you want to delete")
    }
}



function setBooking() {

//numberOfBooking = document.getElementById("deleteB").value;



    if (confirm('Are you sure, you want to make a booking?')) {
        // Save it!

        let bookingArray = JSON.parse(localStorage.getItem("bookings"));

        var bookingNumber, seats2, e, date, f, time, userId, bookings, values;

    if (bookingArray == null) {
        bookingNumber = 1;
    } else {
        bookingNumber = bookingArray.length + 1;
    }

        seats2 = document.getElementById("tableSeats").value;



      //  e = document.getElementById("date");
        //date = e.options[e.selectedIndex].value;

        //let dateList = document.getElementsByClassName("selected-date");
        //for(var i = 0; i < dateList.length; i++) {
          //  console.log(dateList[i].getAttribute('data-value'));
        //}
        //date = dateList[0].getAttribute('data-value');

        date = document.getElementById("datestring").innerHTML;
        f = document.getElementById("time");
        time = f.options[f.selectedIndex].value;

        userId = localStorage.getItem("current_user");


        bookings = new Booking(bookingNumber, seats2, date, time, userId);

        values = JSON.parse(localStorage.getItem("bookings"));
       if (values === null) {
           values = [];
       }
        values.push(bookings);

        localStorage.setItem("bookings", JSON.stringify(values));
      new Booking().bookingAlert();
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