// Cadeia de prototipos (prototype Chain)
Object.prototype.attr0 = 'Z' // Não faça isso no dia a dia
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1) // Chama a herança
console.log(filho.attr0) // Depois do avo ele vai procurar na Object.prototype

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        // this = Referencia o Objeto atual
        // Super = Referencia o meu prototipo
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo relações entre objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // Apenas o Objeto ferrari
console.log(volvo) // Apenas o Objeto volvo

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(350)
console.log(ferrari.status())