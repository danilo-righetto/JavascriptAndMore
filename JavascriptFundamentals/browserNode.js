// Browser VS NODEJS
/* No Browser existe um objeto global chamado WINDOW que terá muitas informações sobre o Browser 
você pode usar o THIS que irá referenciar o objeto WINDOW
Tudo o que é declarado no Browser, usando VAR, vai estar dentro do objeto global WINDOW
Tudo o que é declarado no Browser usando LET ou CONST será global mas fora do objeto WINDOW
*/

const f2 = () => console.log(this === window); //Está função será global mas fora do objeto WINDOW

/* Apenas novos objetos não estarão no escopo global no Browser */

let pessoa = {nome: 'Ana', falar: function(){return `Eu sou ${this.nome}`}}

console.log(pessoa.falar()); // Retorna 'Eu sou Ana'

// pessoa.verificarEscopo = function() {return this === window};

// pessoa.verificarEscopo();

// console.log(pessoa.verificarEscopo());

let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(this.a);
console.log(global.a); // O objeto GLOBAL no NODEJS funciona como o objeto WINDOW do Browser
console.log(global.b);

console.log(module.exports === this); // Em nodejs cada arquivo é um módulo diferente
console.log(module.exports);

module.exports = { f: 456, g: false, h: 'teste' }

console.log(module.exports);

//Criando uma variavel maluca
abc = 1234; // Não faça isso no seu desenvolvimento