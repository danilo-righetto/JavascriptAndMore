/* Trabalhando novamente com ESCOPO */

var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}

console.log('fora =', numero);
/* FUJA DO ESCOPO GLOBAL */

/* Isso só acontece com declaração de variáveis com 'VAR'.
   Quando declaramos variáveis com LET algumas coisas mudam.
*/