{
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");

btnInsert.onclick = function () {
    const key = inpKey.value;
    const value = inpValue.value;

    console.log(key);
    console.log(value);
}
}