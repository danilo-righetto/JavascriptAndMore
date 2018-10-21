//Par Nome e Valor
const saudacao = 'Ola'; // contexto léxico 1

function exec(){
    const saudacao = 'Fala'; // contexto léxico 2
    return saudacao;
}

//Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua x',
        numero: 123,
    }
}

