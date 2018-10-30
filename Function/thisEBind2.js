//THIS e BIND 2
function Pessoa1() {
    this.idade = 0;
    // A cada 1000 milisegundos a função abaixo será executada
    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

// new Pessoa;

// COMO RESOLVER ESSE PROBLEMA ???

function Pessoa2() {
    this.idade = 0;
    const self = this;
    // A cada 1000 milisegundos a função abaixo será executada
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
}

new Pessoa2;