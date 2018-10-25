//Tratamento de Erros com Javascript
function tratarErro(error){
    // throw new Error('...');
    throw true;
}

function imprimirNome(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!');   
    } catch (error) {
        // console.log('erro');
        tratarErro(error);
    } finally {
        // No bloco 'finally' ele vai executar um código independente se ocorreu um erro ou não
        console.log('final');
    }
}

const obj = { name: 'Roberto'}
imprimirNome(obj);