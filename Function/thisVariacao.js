//Variação do 'this' no Javascript

function f1() {
    console.log(this === window);
}

f1();

//Associando a função f1 ao click dentro do 'body'
document.getElementsByTagName('body')[0].onclick = f1();

function f2() {
    console.log(this === document);
}

const f3 = () => console.log(this === window);

