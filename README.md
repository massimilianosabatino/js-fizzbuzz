# Esercizio JS Fizz Buzz

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Ricordate: il primo push dovrà essere un file README.md (potete scrivere testo senza concentrarvi sullo stile markdown) contenente la risoluzione dell’esercizio in linguaggio naturale!

//Utilizzo un ciclo for per generare i numeri in una variabile 
//Dentro il ciclo utilizzo una condizione  
  //SE variabile diviso 3 da resto 0 e variabile diviso 5 da resto 0  
    ->stampa fizzbuzz al posto di variabile  
  //INVECE SE variabile diviso 3 da resto 0  
    ->stampa fizz al posto di variabile  
  //INVECE SE variabile diviso 5 da resto 0  
    ->stampa buzz  
  //stampa variabile

## Per i bonus  

### Bonus 1

//Creo una struttura di base html per contenere gli elementi HTML creati durante il ciclo  
//Inserisco nel ciclo che crei ad ogni ciclo un elemento html con all'interno la variabile ottenuta (probabilmente un div)  

### Bonus 2

//aggiungo alla funzione di prima che oltre a creare un elemento aggiunga anche delle classi CSS  
  //SE la variabile contiene fizz  
    ->aggiunge la classe fizz  
  //SE la variabile contiene buzz  
    ->aggiunge la classe buzz  
  //SE la variabile contiene fizzbuzz  
    ->aggiunge la classe fizz e buzz  
//Modifico il css per applicare degli stili alle varie classi

