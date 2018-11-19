//Contexto que as coisas são declaradas
const valor = 'Global';

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    minhaFuncao();
}

exec();