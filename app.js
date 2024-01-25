let listaDeNumerosSorteados = []
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2})
}

exibirMesnagemInicial();

function exibirMesnagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela(`p', 'Escolha um número entre 1 e ${numeroLimite}`);
}

function verificarChute() {
    let chute = document.querySelector('input').value ;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativas = Tentativas = 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);

        limparCampo();

        desabilitarBotao('chute');
        habilitarBotao('reiniciar');
    }
    else {
        exibirTextoNaTela('h1','Errou!')
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }
        else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas ++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosEscolhidos == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMesnagemInicial();
    desabilitarBotao('reiniciar');
    habilitarBotao('chute');
}

function desabilitarBotao(id) {
    document.getElementById(id).setAttribute('disabled', true);
}
 function habilitarBotao(id) {
    document.getElementById(id).removeAttribute('disabled');
 }