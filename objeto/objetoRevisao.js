// coleção dinamica de pares chave valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['Marca do Produto'] = 'Generica';
produto.preco = 220;

console.log(produto);

// Excluindo Atributos
delete produto.preco;
console.log(produto);

// ...
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 50,
        endereco: {
            rua: 'Rua 1',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 26
    }],
    calcularValorSeguro: function(){
        console.log('Valor calculado: .........'); 
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['rua'] = 'Rua Florenço de Abreu';

console.log(carro);

delete carro.condutores;
console.log(carro);
console.log(carro.condutores.length); // Vai dar erro porque condutores foi deletado