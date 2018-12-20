require('./global')
/* Uma vez que você carregou um arquivo que modifica o objeto global, não se faz necessário atribuir em nenhuma variavel */
console.log(MinhaApp.saudacao()) // Funciona

MinhaApp.nome = 'Posso mudar o nome - Eita!' // Não consigo trocar o nome - Freeze
console.log('MinhaApp.nome:',MinhaApp.nome)