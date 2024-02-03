// Modifica o texto do título (h1).
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

// Modifica o texto do parágrafo (p).
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
    
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}





// Modifica o atributo src da imagem.
let imagem = document.querySelector('img');
imagem.src = './assets/img/ia.png'; // Substitua pelo caminho real da sua imagem.

