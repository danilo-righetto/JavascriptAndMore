console.log(this === global) //false
console.log(this === module) //false
console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis() {
    console.log('Dentro de uma função .....')
    console.log('logThis: ', this === exports)
    console.log('logThis: ', this === module.exports)
    console.log('logThis: ', this === global)
    this.perigo = '...' // THIS aponta para global
}

this.perigo2 = '...' // THIS aponta para 'module.exports'
logThis()

