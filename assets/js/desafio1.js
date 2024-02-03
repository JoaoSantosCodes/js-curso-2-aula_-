// Função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log("Olá, mundo!");
}

// Chamando a função olaMundo para exibir a mensagem no console.
olaMundo();

// Função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

// Chamando a função olaNome com o argumento "joao".
olaNome("joao");

// Função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(numero) {
    return numero * 2;
}

// Chamando a função dobroNumero com o argumento 5 e exibindo o resultado no console.
let resultadoDobro = dobroNumero(5);
console.log(`O dobro de 5 é ${resultadoDobro}`);

// Função que recebe três números como parâmetros e retorna a média deles.
function mediaTresNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// Chamando a função mediaTresNumeros com os argumentos 10, 15 e 20 e exibindo o resultado no console.
let resultadoMedia = mediaTresNumeros(10, 15, 20);
console.log(`A média dos números é ${resultadoMedia}`);

// Função que recebe dois números como parâmetros e retorna o maior deles.
function maiorEntreDoisNumeros(num1, num2) {
    return Math.max(num1, num2);
}

// Chamando a função maiorEntreDoisNumeros com os argumentos 10 e 15 e exibindo o resultado no console.
let resultadoMaior = maiorEntreDoisNumeros(10, 15);
console.log(`O maior número é ${resultadoMaior}`);

// Função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadradoNumero(numero) {
    return numero * numero;
}

// Chamando a função quadradoNumero com o argumento 4 e exibindo o resultado no console.
let resultadoQuadrado = quadradoNumero(4);
console.log(`O quadrado de 4 é ${resultadoQuadrado}`);
