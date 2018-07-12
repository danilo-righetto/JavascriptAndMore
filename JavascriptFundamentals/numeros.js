const peso1 = 1.0; //Constante com ponto flutuante
const peso2 = Number('2.0');

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 7.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

console.log("Media:" + media.toFixed(2)) //Mostra apenas 2 casas decimais apos a virgula
console.log("Media:" + media.toString()) //Media agora é String
console.log("Media:" + media.toString(2)) //Media agora é String Binário
