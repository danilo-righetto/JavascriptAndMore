/* Função VS Objeto */

console.log(typeof Object); //Função
console.log(typeof new Object); //Objeto

// Criando uma classe
const Cliente = function(){}
console.log(typeof Cliente); // Função
console.log(typeof new Cliente); // Objeto

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto); // Função
console.log(typeof new Produto()); // Objeto

/* No Javascript é possível criar objetos a partir de funções */

