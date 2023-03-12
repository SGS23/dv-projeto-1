/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll('.botao');//1
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {//2
    botao.addEventListener('click', () => {
        //3
        const botaoSelicionado = document.querySelector('.selecionado');
        console.log(botaoSelicionado.classList.remove('selecionado'));

        //4
        botao.classList.add('selecionado')

        //5
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa')

        //6
        imagens[indice].classList.add('ativa')

    })
})

