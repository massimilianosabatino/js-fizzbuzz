'use strict';

//Definizione variabili globali
let numberCurrent;

const containerDiv = document.getElementById('container');
//const div = document.createElement("div");

//Ciclo per generare numeri
for (let i = 1; i < 101; i++) {
    //Creazione variabile div per creare un div html ogni volta che viene eseguito il ciclo
    const div = document.createElement("div");
    numberCurrent = i;
    if (i % 3 === 0 && i % 5 === 0) {
        numberCurrent = 'fizzbuzz';
        div.classList.add('fizz', 'buzz');
    } else if (i % 3 === 0) {
        numberCurrent = 'fizz';
        div.classList.add('fizz');
    } else if (i % 5 === 0) {
        numberCurrent = 'buzz';
        div.classList.add('buzz');
    }
    console.log(numberCurrent);
    //Qui anzichè fare così, si poteva inserire in ELSE di stampare i (consol.log(i)) e avrebbe funzionato senta creare una nuova variabile


    //inserimento dentro al div il valore della variabile genrata dal ciclo
    div.append(numberCurrent);
    //Inserisce tutto dentro un div che fa da container
    containerDiv.append(div)
}
