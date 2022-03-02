
/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */

let numbers = [];
let sum = 0;

for(i=0 ; i<10; i++){
    const randomInt = Math.floor(Math.random()*1000);
    numbers.push (randomInt);
    sum+= randomInt;
}

console.log(numbers);
console.log(numbersIn);
console.log(sum/ numbers.length);