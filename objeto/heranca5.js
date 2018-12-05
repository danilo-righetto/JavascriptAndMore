console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

// Inverte o texto usando o método adicionado no prototype
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

// Retornar o primeiro elemento
console.log([1, 2, 3, 4, 5, 6].first())

/* Dica - não substitua comportamentos no JavaScript */