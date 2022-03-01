
/* creo due input dove l'utetne inserirà due parole */
const parolaUno = prompt("inserisci parola");
const parolaDue = prompt("inserisci parola");

/* condizione dove stampo nella console prima la parola più corta e poi la più lunga */
/* per fare questo chiedo: se la lunghezza di parolaUno è maggio di parolaDue allora stampa prima parolaDue e poi parolaUno */

 if( parolaUno.length > parolaDue.length){
    console.log(parolaDue)
    console.log(parolaUno)    
}

/* qui fo l'inverso */
else if ( parolaDue.length > parolaUno.length){
    console.log(parolaUno)
    console.log(parolaDue)
}
else{
    console.log("le lunghezze sono uguali")
}; 
