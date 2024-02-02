// Modifica o texto do título (h1).
let titulo = document.querySelector('h1');
titulo.innerText = 'Jogo do Número Secreto';

// Modifica o texto do parágrafo (p).
let paragrafo = document.querySelector('p');
paragrafo.innerText = 'Escolha um número entre 1 e 10';

// Modifica o atributo src da imagem.
let imagem = document.querySelector('img');
imagem.src = './assets/img/ia.png'; // Substitua pelo caminho real da sua imagem.

function verificarChute() {
    console.log('o botão foi clicado')
}