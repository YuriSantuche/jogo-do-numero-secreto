let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function alterarTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirMensagemIncial();
function exibirMensagemIncial(){
    alterarTexto('h1','Jogo do número secreto.');
    alterarTexto('p','Escolha um número entre 1 e 50.')
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        alterarTexto('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        alterarTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else{
        if(chute>numeroSecreto){
            alterarTexto('p','O numero secreto é menor.');
        }
        else{
            alterarTexto('p','O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    exibirMensagemIncial();
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas=1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


