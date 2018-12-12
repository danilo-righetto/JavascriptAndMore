// Classe que vai usar outros modulos que foram definidos
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

// Utilizando os dados de outros modulos
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log('Modulo A: ', moduloA)

console.log('moduloB.bomDia:', moduloB.bomDia)
console.log('moduloB.boaNoite():', moduloB.boaNoite())
console.log('Modulo B:', moduloB)