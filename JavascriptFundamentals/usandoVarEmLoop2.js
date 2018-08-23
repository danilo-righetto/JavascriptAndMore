/* Novos exemplos - Usando VAR em loop */

const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function (){
        //Adicionar funções no Array e imprimir i
        console.log('VAR - valor de i = ',i);
    });
}

funcs[2](); // Mostra o valor da função do indice 2
funcs[8](); // Mostra o valor da função do indice 8

// Reposta: Nos dois casos vai ser impresso o valor de 10 por conta do escopo de VAR

const funcs2 = [];

for (let i = 0; i < 10; i++) {
    funcs2.push(function (){
        //Adicionar funções no Array e imprimir i
        console.log('LET - valor de i = ',i);
    });
}

funcs2[2](); // Mostra o valor da função do indice 2
funcs2[8](); // Mostra o valor da função do indice 8

// Resposta: para cada indice será impresso um valor diferente