/* Trabalhando com Escopo */
{{{{ var sera = 'Sera?' }}}}
console.log(sera);

/* Entendendo onde as variáveis são visiveis em blocos */

function teste(){
    /* Variavel 'local' só é visivel dentro da função */
    var local = 123;
}

teste();
console.log(local);

/* Dentro de uma pagina WEB existe uma variavel global chamada "Windows".
   Essa variavel glocal possui dentro dela tudo o que foi declarado sem escopo.
   Se você digitar no 'console' o comando 'windows.a' ele vai mostrar o valor
   da variavel.
*/

/* ATENÇÃO: Não declare variáveis do modo GLOBAL */
/* Deixe as variáveis dentro do ESCOPO */

/* No Javascript só existe dois tipos de escopo - GLOBAL ou LOCAL(Função) */

