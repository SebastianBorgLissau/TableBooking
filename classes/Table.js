//array med borde


    var table1 = 5;
    var table2 = 8;
    var table3 = 2;
    var table4 = 4;
    var table5 = 3;
    var table6 = 5;
    var table7 = 9;
    var table8 = 10;
    var table9 = 4;
    var table10 = 7;
    var table11 = 2;

//Alle borde i samlet array
    var allTables = [
        table1,
        table2,
        table3,
        table4,
        table5,
        table6,
        table7,
        table8,
        table9,
        table10,
        table11,
    ];

//Sort funktion som sammenligner tal a og b og finder det mindste til det største.

//var sortTables = allTables.sort(function(a, b){return a - b});



//Funktion som tager form input og alerter


function findAntalPersoner() {

    //var antalPladser = document.getElementById('seats').value;

    //alert(antalPladser);


    for (var i = 0; i < allTables.length; i++) {
        console.log(allTables[i]);


        var findtable = allTables[i] === 7;



        if (findtable == true) {
            console.log("table reserved");
            //alert("Table reserved");
            //(findtable % allTables[i] == 2)
                     return false;
                     
        }


        }

        if(findtable === false) {


             console.log("table not available");
            //alert("Table not available");
             return false;
          }
    }

console.log(findAntalPersoner());
//var i;
//for (i=0; i < allTables.length; i++)
    //if antalPladser
//for (var i=0, len=allTables.length; i<len; i++) {
   // if (antalpladser % allTables[i] == 0)
        //alert("Du har bestilt bord" "med" "pladser"

