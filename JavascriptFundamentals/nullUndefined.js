/* Quando tentamos atribuir um objeto para um novo objeto
o valor não é passado, mas sim sua referência.
De modo que independente de onde for modificado, o objeto
principal será modificado */

const a = {name: 'Teste'}
console.log('a.name', a.name);

const b = a
b.name = 'Danilo'
console.log('a.name', a.name ,'b.name', b.name);

let valor ///
console.log(valor) //Undefined
// console.log(valor2) // Error - Not Defined - Não declarado

valor3 = null; // Declarar a variavel nula
console.log('valor', valor3);
//console.log(valor3.toString()); // Erro

const produto = {}
console.log('produto.preco',produto.preco) // sem resultado

/* Evite atribuir undefined - como abaixo */
produto.preco = undefined;
console.log('produto.preco', produto.preco);

produto.preco = null;
console.log('produto.preco', produto.preco);