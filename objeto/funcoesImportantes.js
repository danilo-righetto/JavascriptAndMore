// Funções Importantes
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// Definindo uma propriedade de um objeto - caracteristicas
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Pode ser listado
    writable: false, // Não permite ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2018' // Não permitiu a modificação desse atributo/propriedade
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const dest = { a:1 }
const o1 = { b:2 }
const o2 = { c:3, a:4 }
const obj = Object.assign(dest, o1, o2) // concatenação de atributos em um unico objeto
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)