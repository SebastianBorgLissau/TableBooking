//Table Class

//While loop der laver et array med 10 forskellige et-cifrede numre (Svarer til borde der er forskellige størrelser)
var tableSizes = []
while(tableSizes.length < 10){
    var tableSize = Math.floor(Math.random()*10) + 1;
    if(tableSizes.indexOf(tableSize) === -1) tableSizes.push(tableSize);
}
console.log(tableSizes);
