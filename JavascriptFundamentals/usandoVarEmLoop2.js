/* Novos exemplos - Usando VAR em loop */

const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function (){
        //Adicionar funções no Array e imprimir i
        console.log(i);
    });
}

funcs[2](); // Mostra o valor da função do indice 2
funcs[8](); // Mostra o valor da função do indice 8

// Reposta: Nos dois casos vai ser impresso o valor de 10 por conta do escopo de VAR