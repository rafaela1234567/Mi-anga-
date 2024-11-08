// script.js
function atualizarPulseira() {
    // Seleciona o elemento da pulseira
    const pulseira = document.getElementById('pulseira');

    // Obtém a cor escolhida pelo usuário
    const cor = document.getElementById('cor').value;
    pulseira.style.backgroundColor = cor;

    // Obtém o acessório escolhido
    const acessorio = document.getElementById('acessorios').value;

    // Adiciona acessórios visualmente (simulação)
    pulseira.innerHTML = ''; // Limpa os acessórios
    if (acessorio !== 'nenhum') {
        const elementoAcessorio = document.createElement('span');
        elementoAcessorio.classList.add('acessorio', acessorio);
        elementoAcessorio.innerText = acessorio;
        pulseira.appendChild(elementoAcessorio);
    }
}
