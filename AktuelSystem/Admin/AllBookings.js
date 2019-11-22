function myBookings() {
    var bookings = JSON.parse(localStorage.getItem("bookings")); //skiftes ud med booking
    var bookingArray = [];


    for(var i = 0; i < bookings.length; i++) {

        console.log(bookings[i]);
        bookingArray.push(bookings[i]);

        }

    //console.log();

    let row, cell, text, r, c,
        prop = ['bookingNumber','seatsChosen', 'date', 'time','user'], //navne-properties under bookings, som for loop med var c henter værdier fra
        table = document.getElementById("myList1"),
        data = bookingArray;

    for (r = 0; r < data.length; r++) {
        row = document.createElement('tr'); // tr = table rows. Looper over bookingArray og laver rækker for hvert element i arrayet

        //laver 4 celler
        for (c = 0; c < 5; c++) {
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
    let information = JSON.parse(localStorage.getItem("info")), //skiftes ud med identifier
        infoArray = [];

    for(var i = 0;i < information.length; i++) {
        infoArray.push(information[i]);
    }



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