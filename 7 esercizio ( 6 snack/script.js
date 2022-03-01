/* con questo esercizio ho avuto difficoltà */

/* const utentNumber = parseInt(prompt("inserisci numero"));
const cifre = 0;



for( i=0; i<7; i++){
    utentNumber.l    
} */

/* CORREZIONE */
/* creo un input dove l'utente inserisce il nemero di sette cifre */
const numeroUtente = prompt("inserisci numero di sette cifre");

/* creo una variabile dal valore zero */
let somma = 0;

/* creo un ciclo for che si ripete per la lunghezza del numero inserito dell'utente */
for(let i = 0; i < numeroUtente.length; i++){

    /* addiziono alla variabile somma il valore in posizione della "i" utilizzando il carattere .charAt*/
    somma = somma + parseInt(numeroUtente.charAt(i));
}

console.log(somma);


/* NB */
/* .charAt trova la locazione di una stringa (in questo caso di un numero di sette cifre) */