import filtraLivros from "./hofs/filter.js";
import mostraLivrosNaTela from "./hofs/forEach.js";
import aplicaDesconto from "./hofs/map.js";
import mostraValorTotalLivros from "./hofs/reduce.js";
import ordenaPorPreco from "./hofs/sort.js";

const ENDPOINT_API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

const botoes = document.querySelectorAll('[data-filtro]');
const btnOrdenaPreco = document.querySelector('[data-ordena="preco"]');

let livros = [];

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const res = await fetch(ENDPOINT_API);
  livros = await res.json();
  let livrosComDesconto = aplicaDesconto(livros);

  botoes.forEach(b => {
    b.addEventListener('click', (e) => {
      mostraLivrosNaTela(filtraLivros(e.target, livros));
      mostraValorTotalLivros(e.target, filtraLivros(e.target, livros));
    })
  })

  btnOrdenaPreco.addEventListener('click', () => {
    mostraLivrosNaTela(ordenaPorPreco(livros));
  })

  mostraLivrosNaTela(livrosComDesconto)
}
