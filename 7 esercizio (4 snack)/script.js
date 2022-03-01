
/* creo un array con dentro i nomi degli invitati alla festa */
const nomi = ["ciccio", "pasticcio", "bella", "daje", "io", "tu", "egli", "noi", "voi", "essi"];

/* creo un input dove l'utente inserisce il suo nome per verificare se è nella lista delgi invitati */
const nomeUtente = prompt("inserisci nome");

/* creo una variabile con valore falso che poi nel caso potesse entrare cambierò in vero */
let isInside = false;


for(i = 0; i <= nomi.length; i++){

    /* se i nomi che scorre nel ciclo for c'è il nome utente inserito allora cambio la variabile in true */
    if(nomi[i]==nomeUtente){
        isInside = true;
    }
}

/* se la variabile isInside è vera allora stampo è tra gli invitati altrimenti stampo non è tra gli invitati */
if(isInside = true){
    console.log("è tra gli invitati")
}
else{
    console.log("non è tra gli invitati")
};




/* come ho fatto io */
/* for(i=0; i< nomi.length; i++){
    if(nomi.includes(nomeUtente)){
        console.log("può entrare")
    }
    else{
        console.log("non può entrare")
    }
}; */