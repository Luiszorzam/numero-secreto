let listaDeNumerosSorteados = [];
let numeroLimete = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{eate:1.2});
}

function exibirMensagemInicial (){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um nuemro entre 1 e 10 ');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabens!');
        let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = ` Você descobriu o numero secreto com ${tentativas} ${palavraTetativa}`;
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('h1', 'Você errou!');
            exibirTextoNaTela('p', 'Tente de novo, o numero é menor');
        }else{
            exibirTextoNaTela('h1','Você errou!');
            exibirTextoNaTela('p', 'Tente de novo, o numero é maior');
        }
        tentativas++; 
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimete +1);
    let quantidadeDeElemntosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElemntosNaLista == numeroLimete){
        listaDeNumerosSorteados= [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }    
}

function limparCampo(){
    chute=document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true); 

}