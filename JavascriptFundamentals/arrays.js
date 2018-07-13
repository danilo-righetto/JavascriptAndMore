const valores = [7.2, 9.3, 6.2, 78.2, 6.3];
console.log(valores[3], valores[2]);

valores[1] = 100;
console.log(valores[1])
console.log(valores)
console.log(valores.length)

//Adicionando valores a um Array
valores.push({id: 3}, 2, false, null, 'teste')
console.log(valores);

console.log(valores.pop()) //deleta o ultimo elemento do Array
delete(valores[1])
console.log(valores)
console.log(typeof valores)

