//A Importancia do callback

const notas = [2.2, 3.3, 9.9, 7.7, 4.4, 8.2, 7.3];

// Sem Callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

// Com Callback
let notasBaixas2 = []
notasBaixas2 = notas.filter(function (nota){
    return nota < 7;
});

console.log(notasBaixas2);

const notasMenorQue7 = nota => nota < 7;
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);