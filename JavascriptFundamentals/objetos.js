// Trabalhando com objetos
const objeto1 = {}
objeto1.nome = 'Celular Ultra Mega'
objeto1.preco = 4999.99
objeto1['desconto'] = 0.40

console.log('objeto1',objeto1);

const prod2 = {
    nome: 'Camisa Polo',
    valor: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blablabla: 2
        }
    }
}

console.log('prod2', prod2);