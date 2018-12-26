// Lendo arquivos com NODEJS
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono ...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log('conteudo:', conteudo)

// assincrono ...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log('readFile:', `${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log('config.db:', config.db)

// Outra Forma ....
fs.readdir(__dirname, (err, arquivos) => {
    // Lendo os arquivos da pasta
    console.log('Conteúdo da pasta ...')
    console.log(arquivos)
})