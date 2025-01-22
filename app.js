//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

//Cria uma lista para armazenar o nome dos amigos
let listaDeAmigos = [];

// função para adicionar os nomes dos participantes  aa lista de amigos
function adicionarAmigo() {

    let nome = document.querySelector('input').value;
    if (nome != ''){
        listaDeAmigos.push(nome);
        limpaCampo();    
    }else {
        alert("Por favor, insira um nome");
    }
    console.log(listaDeAmigos);
   
}    

//Função que limpa o campo de entrada de nomes 
function limpaCampo() {
    document.querySelector('input').value = '';
}

