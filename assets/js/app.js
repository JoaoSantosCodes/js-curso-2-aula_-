let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); // Gera um número aleatório entre 1 e 10.
let tentativas = 1; // Inicializa o contador de tentativas.

function exibirTextoNaTela(tag, texto) {
    // Função para exibir um texto na tela, recebendo uma tag HTML e um texto como parâmetros.
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    // Exibe a mensagem inicial na tela utilizando a função exibirTextoNaTela.
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    // Função chamada quando o botão é clicado para verificar o chute do usuário.
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        // Se o chute for igual ao número secreto, exibe a mensagem de acerto.
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Se o chute for diferente, informa se o número é maior ou menor.
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    // Gera um número aleatório entre 1 e 10.
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 3) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    // Limpa o campo de entrada.
    let campoChute = document.querySelector('input');
    campoChute.value = '';
}

function reiniciarJogo() {
    // Reinicia o jogo gerando um novo número secreto e redefinindo as tentativas.
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

    // Modifica o atributo src da imagem.
    let imagem = document.querySelector('img');
    imagem.src = './assets/img/ia.png'; // Substitua pelo caminho real da sua imagem.
}
