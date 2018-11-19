// Classe VS Factory
class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é: ${this.nome}`);
    }
}

const p1 = new Pessoa('João');
p1.falar();


// Escopo mais abrangente
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const p2 = criarPessoa('Maria');
p2.falar();