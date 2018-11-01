// Callback #1
const fabricantes = ["Marcedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function(fabricante){
    console.log(fabricante);
});

fabricantes.forEach(fabricante => console.log(fabricante)); //Arrow Function