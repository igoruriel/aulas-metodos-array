export default function filtraLivros(target, livros) {
    const filtro = target.dataset.filtro;
    const livrosFiltrados = filtro === 'disponivel'
        ? livros.filter(livro => (livro.quantidade > 0))
        : livros.filter(livro => (livro.categoria === filtro));

    return livrosFiltrados;
}
