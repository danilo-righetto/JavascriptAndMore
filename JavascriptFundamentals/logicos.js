// Operadores Lógicos
function compras(trabalho1, trabalho2) {
    const comprarSortvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSortvete; // operador unário

    //return { comprarSortvete,  comprarTv50, comprarTv32, manterSaudavel: manterSaudavel}
    return { comprarSortvete: comprarSortvete, comprarTv50: comprarTv50, comprarTv32: comprarTv32, manterSaudavel: manterSaudavel}
}

console.log('(01) - ',compras(true, true));
console.log('(02) - ',compras(true, false));

console.log('(03) - ',compras(false, true));
console.log('(04) - ',compras(false, false));
