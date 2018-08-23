/* Entendendo o uso de LET */
var numero = 1;
{
    // Escopo de Bloco
    let numero = 2;
    let numero2 = 4;
    console.log('Dentro = ',numero)
    console.log('Dentro = ',numero2)
}
console.log('Fora = ', numero);

/* 
    VAR - Escopo Global, Escopo de Função
    LET - Escopo Global, Escopo de Função, Escopo de Bloco
*/

// A diferença desses escopos faz toda a diferença
