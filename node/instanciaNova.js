// Criando uma nova instancia
// Uma factory retorna um novo objeto - Função Factory

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}