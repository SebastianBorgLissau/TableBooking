/*this is our booking booking class*/

class Booking {

    constructor(seatsChosen, date, time, user) {

        this.seatsChosen = seatsChosen;
        this.date = date;
        this.time = time;
        this.user = user;
    }
}



function setBooking() {

    if (confirm('Are you sure, you want to make a booking?')) {
        // Save it!

        var seats2 = document.getElementById("tableSeats").value;
        var e = document.getElementById("date");
        var date = e.options[e.selectedIndex].value;

        var f = document.getElementById("time");
        var time = f.options[f.selectedIndex].value;

        var userId = localStorage.getItem("current_user");


        var bookings = [

            new Booking(seats2, date, time, userId,)
        ];

        var values = JSON.parse(localStorage.getItem("bookings"));
        if (values === null) {
            values = [];
        }

        values.push(bookings);
        localStorage.setItem("bookings", JSON.stringify(values));


    } else {

    }
}




