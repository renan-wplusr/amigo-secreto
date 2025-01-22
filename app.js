let listaDeNomes = []; 
let listaVazia;
let listaVisivel; 
let mensagemSorteado; 

//configura o botao de adicionar, além de impedir inputs vazios.
function adicionarAmigo(){   
    let adicionar = document.querySelector('input').value;  
    if (adicionar== ''){ 
        alert ('Digite um nome válido'); 
        return;
    }  
    listaDeNomes.push(adicionar); 
    listaVisivel = document.getElementById('listaAmigos'); 
    let nomeElemento = document.createElement('li'); 
    nomeElemento.textContent = adicionar; 
    listaVisivel.appendChild(nomeElemento);
    limparNomes(); 
}

//configura o botao de sortear amigo, além de impedir sorteios sem elementos.
function sortearAmigo(){    
    sorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)]; 
    mensagemSorteado = document.getElementById('resultado'); 
    mensagemSorteado.innerHTML = `Seu amigo secreto é: ${sorteado}!`; 
    if (sorteado == undefined){ 
        alert('Ninguem para sortear'); 
        mensagemSorteado.innerHTML = ''; 
        return;
    }

    listaDeNomes = listaDeNomes.splice();  
    listaVisivel.innerHTML = '';
}

//limpa o input
function limparNomes(){ 
    adicionar = document.querySelector('input'); 
    adicionar.value = '';
} 

 
