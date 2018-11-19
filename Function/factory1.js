const prod1 = {
    nome: 'Produto',
    preco: 45
}

const prod2 = {
    nome: 'Produto2',
    preco: 46
}

// Funções de Fabrica
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());