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
        alert("Booking " + this.bookingNumber + " succesfully deleted");
    }

    bookingAlertDeleteEmpty () {
        alert("type the number of the booking you want to delete")
    }
}



function setBooking() {

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
        e = document.getElementById("date");
        date = e.options[e.selectedIndex].value;

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
        //  alert("new booking made");
    }
}

function deleteBooking() {

    let bookings = JSON.parse(localStorage.getItem("bookings"));
    // let inputName = prompt("Type in the number of the booking you want to delete");
    let iName = document.getElementById("deleteB").value;
    var ib = bookings.findIndex(x => x.bookingNumber == iName);

    if(iName == "") {
        new Booking().bookingAlertDeleteEmpty();
        //alert("type the number of the booking you want to delete");
        return false;
    }

    if(ib !== -1) {

        console.log(ib);
        bookings.splice(ib, 1);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        alert("booking successfully deleted");
        location.reload();
    } else {
        new Booking().bookingAlertDelete();
        return false;
    }
}

function myBookings() {
    var i,
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

    var row, cell, text, r, c,
        prop = ['bookingNumber','seatsChosen', 'date', 'time'], //navne-properties under bookings, som for loop med var c henter værdier fra
        table = document.getElementById("bookingDIV"),
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