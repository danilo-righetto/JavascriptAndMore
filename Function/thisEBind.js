// Entendo o THIS e BIND
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        //o THIS é obrigatorio
        console.log(this.saudacao);
    }
}

pessoa.falar(); //BOM DIA
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); // Responsavel por amarrar um objeto - referenciar
falarDePessoa(); 

/* O BIND é muito importante no Javascript */