//Operadores de Desestruturação com Array
// Novo recurso do ES2015

const [a] = [10];
console.log(a);

const [n1, , n2, n3, n4 = 9] = [10, 8, 3, 9, 0, 2];
console.log(n1, n2, n3, n4);

const [, [, nota]] = [[11, 12], [23, 24, 25]];
console.log(nota);