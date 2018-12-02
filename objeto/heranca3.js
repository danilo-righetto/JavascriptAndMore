const pai = { nome: 'Pedro', corCabelo: 'Preto' }

// Cria o objeto filha usando como prototipo o objeto pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // Cor: Preto

// Cria o objeto filha usando como prototipo o objeto pai e setando novos atributos
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    // console.log(key)
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}