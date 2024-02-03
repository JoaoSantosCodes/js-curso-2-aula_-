function calcularIMC(peso, altura) {
    // Fórmula do IMC: peso / (altura * altura)
    const imc = peso / (altura * altura);
    return imc;
}

// Exemplo de uso da função
const peso = 70; // em quilogramas
const altura = 1.75; // em metros

const resultadoIMC = calcularIMC(peso, altura);
console.log(`O IMC é: ${resultadoIMC.toFixed(2)}`);

////////////////////////////////////////////


function calcularFatorial(numero) {
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Exemplo de uso da função
const numeroParaCalcularFatorial = 5;
const resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);
console.log(`O fatorial de ${numeroParaCalcularFatorial} é: ${resultadoFatorial}`);

///////////////////////////////////////////

function converterDolarParaReais(valorEmDolar) {
    if (valorEmDolar < 0) {
        return "Não é possível converter um valor negativo.";
    } else {
        const cotacaoDolar = 4.80;
        const valorEmReais = valorEmDolar * cotacaoDolar;
        return valorEmReais.toFixed(2); // Limita o resultado a duas casas decimais
    }
}

// Exemplo de uso da função
const valorEmDolar = 50;
const valorEmReais = converterDolarParaReais(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$${valorEmReais}`);

////////////////////////////////////////////

function calcularAreaEPerimetroRetangular(altura, largura) {
    if (altura <= 0 || largura <= 0) {
        console.log("As dimensões da sala devem ser valores positivos.");
    } else {
        const area = altura * largura;
        const perimetro = 2 * (altura + largura);

        console.log(`Área da sala: ${area} metros quadrados`);
        console.log(`Perímetro da sala: ${perimetro} metros`);
    }
}

// Exemplo de uso da função
const alturaSala = 5;
const larguraSala = 8;
calcularAreaEPerimetroRetangular(alturaSala, larguraSala);

////////////////////////////////////////////

function calcularAreaEPerimetroCircular(raio) {
    if (raio <= 0) {
        console.log("O raio da sala circular deve ser um valor positivo.");
    } else {
        const pi = 3.14;
        const area = pi * raio ** 2;
        const perimetro = 2 * pi * raio;

        console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
        console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
    }
}

// Exemplo de uso da função
const raioSalaCircular = 4;
calcularAreaEPerimetroCircular(raioSalaCircular);

///////////////////////////////////////////

function mostrarTabuada(numero) {
    if (isNaN(numero)) {
        console.log("Por favor, forneça um número válido.");
        return;
    }

    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Exemplo de uso da função
const numeroParaTabuada = 7;
mostrarTabuada(numeroParaTabuada);

////////////////////////////////////////////
