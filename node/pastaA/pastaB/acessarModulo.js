// Acessando modulos de outras pastas
const moduloA = require('../../moduloA') // Respeite o nome do modulo exato
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola) // Encontra o arquivo index.js na pasta 'node_modules\saudacao\'

/* É possível importar os modulos do próprio CORE do nodejs */
const http = require('http')

// Mostra 'Bom dia' no navegador
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)

const c = require('./pastaC/index')
// const c = require('./pastaC') ---- Outra forma de importar
console.log('Pasta C: ', c.ola2)