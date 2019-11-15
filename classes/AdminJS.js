/* Koden skal kunne tage input fra brugeren i html og indsætte disse data i localstorage.
Skal praktisk bruges som en måde at kunne tilføje borde til databasen //SBL
 */

//Definerer inputs fra HTML som konstanter //SBL
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");

// Funktion som tager user inputs i form af key med en tilhørende value og definerer som konstanter
btnInsert.onclick = function () {
    const key = inpKey.value;
    const value = inpValue.value;

// Hvis både key og value får en værdi, så tilføjes denne key og værdi til local storage. Samtidigt refreshes local storage
    if (key && value) {
       localStorage.setItem(key,value);
       location.reload();
    }
};

// for loop som tæller igennem local storage og skriver keys og values som string outputs
    for (let i = 0; i < localStorage.length; i++) {
       const key = localStorage.key(i);
       const value = localStorage.getItem(key);

       lsOutput.innerHTML += `${key}:${value}<br />`;
    }

    //var BordData = localStorage.getItem("Bord1","Bord2",'Bord3','Bord4');
    //var alleBorde = JSON.parse(BordData);

        //alert(alleBorde.length);