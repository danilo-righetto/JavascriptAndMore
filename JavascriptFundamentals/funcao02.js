/* Armazenando uma função em uma variavel */
const imprimirSoma = function (a, b){
    console.log(a + b);
};

imprimirSoma(2, 3);

/* Armazenando uma funcao arrow em uma variavel */
const soma = (a, b) => {
    console.log(a + b);
};

soma(10, 20);

/* Retorno implicito */
const subtracao = (a, b) => a - b;
console.log(subtracao(33,11));

const imprimir2 = a => console.log(a);
imprimir2("Legal");


