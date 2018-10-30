// Arrow Functions 1 

// Sem Arrow Function
let dobro = function (a) {
    return 2 * a;
}

// Com Arrow Function
dobro = (a) => {
    return 2 * a;
}

// Com Arrow Function 2
dobro = a => 2 * a; //return implicito

console.log(dobro(Math.PI));

/* Outro Exemplo */

let ola = function () {
    return 'Ola';
}

ola = () => 'Ola';
ola = _ => 'ola'; // Possui um parametro
console.log(ola());