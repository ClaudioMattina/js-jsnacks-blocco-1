

/* creo variabile somma con valore zero */
let somma = 0;


/* ripeto un ciclo di 10 input dove l'utente inserisce il numero */
for(i=0 ; i<10 ; i++){
    const number = parseInt(prompt("inserisci numero"));
    /* addiziono alla somma tutti i valori inseriti dall'utente */
    somma+= number;
}
/* stampo la somma finale */
console.log(somma);