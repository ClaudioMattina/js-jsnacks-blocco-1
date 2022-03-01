
/* creo un array vuoto */
const numeriDispari =[];


/* creo un ciclo for che chiede 6 volte un numero all'utente */
for(let i = 0; i < 6; i++ ){
    const numeroUtente = parseInt(prompt("inserisci numero"));


    /* se il numero dell'utente è dispari lo inserisco tramite il termine .PUSH nell'array numeriDispari */
    
                             /* e se non è un numero */
    if(numeroUtente % 2 !== 0 && !isNaN(numeroUtente)){
        numeriDispari.push(numeroUtente);
    }
};

/* stampo nella console l'array numeriDispari */
console.log(numeriDispari);