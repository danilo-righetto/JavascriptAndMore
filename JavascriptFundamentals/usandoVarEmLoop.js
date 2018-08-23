/* Usando VAR em LOOP - Exemplo de ESCOPO */

for (var i = 0; i < 10; i++) {
    console.log(i);
}

/* 
    Nesse contexto a variável 'i' é exibida com o proximo valor do loop
    Isso serve para mostrar que variáveis usando a palavra reservada "VAR"
    ficam disponíveis globlamente fora do bloco.
 */
console.log('i = ',i);
