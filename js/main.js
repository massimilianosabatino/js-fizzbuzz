'use strict';

//Definizione variabili globali
let numberCurrent;

const containerDiv = document.getElementById('container');
//const div = document.createElement("div");

//Ciclo per generare numeri
for (let i = 1; i < 101; i++) {
    numberCurrent = i;
    if (i % 3 === 0 && i % 5 === 0) {
        numberCurrent = 'fizzbuzz';
    } else if (i % 3 === 0) {
        numberCurrent = 'fizz';
    } else if (i % 5 === 0) {
        numberCurrent = 'buzz';
    }
    console.log(numberCurrent);

    const div = document.createElement("div");
    div.append(numberCurrent);
    containerDiv.append(div)
}
