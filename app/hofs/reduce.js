const elementoParaInserirValorTotalLivros = document.getElementById('valor_total_livros_disponiveis');

export default function mostraValorTotalLivros(target, livros) {
    elementoParaInserirValorTotalLivros.innerHTML = '';

    const filtro = target.dataset.filtro;
    const precoTotal = livros.reduce((acc, atual) => acc + atual.preco, 0).toFixed(2);

    if (filtro === 'disponivel') {
        elementoParaInserirValorTotalLivros.innerHTML = `    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
      </div>`
    }
}