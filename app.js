//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

//Cria uma lista para armazenar o nome dos amigos
let listaDeAmigos = [];
let i;

// função para adicionar os nomes dos participantes  aa lista de amigos
function adicionarAmigo() {  
        let nome = document.querySelector('input').value;
        if (nome != ''){
            listaDeAmigos.push(nome);
            limpaCampo();
            listarAmigos();    
        } else {
            alert("Por favor, insira um nome");
        }
        console.log(listaDeAmigos);   
}  

//Função que limpa o campo de entrada de nomes 
function limpaCampo() {
    document.querySelector('input').value = '';

}

//Função para atualizar a lista de amigos e mostrar na tela 
function listarAmigos() {
    let listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpa a lista antes de atualizar

    for (let nomes of listaDeAmigos) {
        let listItem = document.createElement('li');
        listItem.textContent = nomes;
        listaAmigosElement.appendChild(listItem);
    }
}

function sortearAmigo() {
    
    if (listaDeAmigos.length > 0) {
        i = listaDeAmigos.length;
        //alert(`Total do Array ${i}`);
        let indiceAleatorio = parseInt(Math.random() * i);
        let nomeSorteado = listaDeAmigos[indiceAleatorio];
        limparListaAmigos();
        listaAmigoSorteado = document.getElementById('resultado');
        listaAmigoSorteado.innerHTML = nomeSorteado;
    } else {
        reiniciarAmigoSecreto();
    }

}

function reiniciarAmigoSecreto(){
    limpaCampo();
    limparListaAmigos();
    listaDeAmigos = [];
   
}   

function limparListaAmigos(){
    
    listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpa todo o HTML dentro da ul

    listaAmigoSorteado = document.getElementById('resultado');
    listaAmigoSorteado.innerHTML = ''; // Limpa o nome sorteado no HTML dentro da ul

}
