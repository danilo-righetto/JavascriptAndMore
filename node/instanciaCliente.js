// Testando as instancias
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log('contadorB.valor:',contadorB.valor)

contadorB.inc()
contadorB.inc()
console.log('contadorA.valor:',contadorA.valor)

contadorC.inc()
contadorC.inc()
console.log('contadorD.valor:',contadorD.valor)