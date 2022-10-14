/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */



//chiedo di inserire una parola
let parolaUtente = document.getElementById('parolaUtente');
let palindroma = document.getElementById('palindroma');

// funzione che inizia con un evento
palindroma.addEventListener('click', function(){ 
let palindroma = parolaUtente.value.split('').reverse().join('');
/* console.log(palindroma); */
} ) 

//stampa se è vero o falso
if (parolaUtente == palindroma){
        console.log('la parola è palindroma')
} else {
        console.log('la parola non è palindroma')
  }   

  /* NON FUNZIONA MI SA SEMPRE CHE NON è PALINDROMA */




/* array 
generiamo 10 numeri (ciclo)
somma 
*/

// let somma = 0;
// let numeri = []

// for (let i = 0; i < 10; i++) {

    
//     let random = Math.floor(Math.random() * 10) // un numero intero random da 0 a 10

//     // aggiungo il numero alla somma
//     somma = somma + random;

// }

// console.log(somma);

// parseInt trasforma un carattere in un numero

// let numeroA1 = prompt("Scrivi un numero");
// let numeroA2 = prompt("Scrivi un altro numero");
/* 
let parola = "Giada";

let variabile = parola;

console.log(variabile) */

// console.log(parseInt(numeroA1) + parseInt(numeroA2)); // 5

// console.log(numeroA1 + numeroA2); // 23