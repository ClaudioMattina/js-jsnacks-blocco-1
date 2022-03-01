
/* creo due input dove l'utente inserira due numeri */
const firstPront = prompt("inserisci numero");
const secondPront = prompt("inserisci numero");

/* condizione dove nell'ispector si stamperà la cifra più alta */
if(firstPront > secondPront){
    console.log(firstPront)
}
else if (firstPront<secondPront) {
    console.log(secondPront)
}
else{
    console.log("le parole sono lunghe uguali")
};