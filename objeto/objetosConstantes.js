// Objetos Constantes
// pessoa -> 123 (endereço de memoria)
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 <- {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // Uma vez que o objeto esta congelado ninguem consegue mais modifica-lo
// Isso faz que o objeto seja constante

pessoa.nome = 'Maria'
console.log(pessoa.nome)

// Criando um objeto constante
const pessoaConstante = Object.freeze({ nome: 'Joao'})
console.log(pessoaConstante)