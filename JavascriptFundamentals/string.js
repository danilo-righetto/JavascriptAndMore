// Tipos em Javascript: String
const escola = "Cod3r";
console.log(escola.charAt(3));  //O metodo charAt() serve para pegar a letra de acordo com o indice da String
console.log(escola.charAt(4));
console.log(escola.charCodeAt(4));

console.log(escola.indexOf(3)); // Tem a mesma função ao metodo charAt()
console.log(escola.substring(1)); // Esse metodo vai retornar tudo do indice 1 para frente
console.log(escola.substring(0, 3)); // Esse metodo vai retornar do indice 0 ao indice 3 sem incluir o indice 3

console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(/\w/g, 'e')); // Substituir globalmente todos os caracteres por 'e' usando RegEx
console.log(escola.replace(3, 'e')); // Substituir a letra no indice 3 por 'e'

console.log('Ana, Maria, Carlos, Pedro'.split(',')); // Transforma o texto em Array

