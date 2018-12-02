const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Acessando atributos do objeto pai
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // Esse objeto não possui um pai na herança

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
