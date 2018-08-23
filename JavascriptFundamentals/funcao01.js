/* Trabalhando com funções em Javascript */

function imprimiSoma(a, b){
    console.log(a + b);
}

imprimiSoma(2);
imprimiSoma(2, 4);
imprimiSoma(2, 3, 4, 5, 6);

function soma(a = 0, b = 0){
    return a + b;
}

console.log('soma',soma(2, 4));
