let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global); //Pode trocar 'global' para 'window' no Browser

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);