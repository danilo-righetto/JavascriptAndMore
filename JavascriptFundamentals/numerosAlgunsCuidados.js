/* Alguns cuidados com numeros em Javascript */

console.log(7 / 0); // Permitido
console.log("10" / 2); /* Permitido */
console.log("Show" * 2); //Não é permitido - NaN Error
console.log(0.1 + 0.7); // Não é preciso
//console.log(10.toString()); Não é permitido
console.log((10.345).toFixed(2)); // Permitido