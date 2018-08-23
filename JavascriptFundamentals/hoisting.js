/* Entendendo como funciona o HOISTING no Javascript */

console.log('a = ', a);
var a = 2;
console.log('a = ', a);

// HOISTING faz o "içamento" da variável
// Ou seja o Javascript declara a variável 'a' e depois atribui um valor

console.log('b = ',b);
let b = 3;
console.log('b = ',b);

// Usando LET esse HOISTING não acontece