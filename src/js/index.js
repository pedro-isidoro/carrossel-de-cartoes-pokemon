 /*
 Objetivo 1 - Quando clicarmos nas setas de avançar, temos que mostrar o próximo cartão
    - Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar;
    - Passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar;
    - Passo 3 - Fazer aparecer o próximo cartão da lista;
    - Passo 4 - buscar o cartão que esta selecionado e esconder;

 Objetivo 2 - Quando clicarmos na seta de voltar, temos que mostrar o cartão anterior
    - Passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar;
    - Passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar;
    - Passo 3 - Fazer aparecer o cartão anterior da lista;
    - Passo 4 - buscar o cartão que esta selecionado e esconder
 */

// - Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar;
// document.getElementById('btn-avancar')
const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll(".card");
let cartaoAtual = 0;

// - Passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar;
btnAvancar.addEventListener('click', () =>{
    // Executa até 2 ser identico á 2, depois para
    if(cartaoAtual === cartoes.length - 1) return

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selected")

    // - Passo 4 - buscar o cartão que esta selecionado e esconder;
    const cartaoSelecionado = document.querySelector(".selected");
    cartaoSelecionado.classList.remove("selected");
});