const elementoParaInserirLivros = document.getElementById('livros');

export default function mostraLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {
    let disponivel = verificaDisponibilidadeLivro(livro);
    elementoParaInserirLivros.innerHTML += `<div class="livro">
      <img class='${disponivel}' src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
  });
}

function verificaDisponibilidadeLivro(livro) {
  return livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
}
