//Table Class

//While loop der laver et array med 10 forskellige et-cifrede numre (Svarer til borde der er forskellige størrelser)

// var tableSizes = []
// while(tableSizes.length < 10){
// var tableSize = Math.floor(Math.random()*10) + 1;
// if(tableSizes.indexOf(tableSize) === -1) tableSizes.push(tableSize);
//console.log(tableSizes)

//Drop down i html som giver en værdi - skal tildeles et af bordene som har nok pladser.

//Fieldset input skal læses i javascript

// for loop der tæller og finder et ledigt bord else if - giver besked - ingen ledige borde på dato.

// Dummy Data med borde
//Borde med antal sæder
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
    table10
];
//Sort funktion som sammenligner tal a og b og finder det mindste til det største.
console.log(allTables.sort(function(a, b){return a - b}));

function FindAvaliableTable() {
    var antalpladser = document.getElementById('antal_pladser').value;

    alert(antalpladser);

}
