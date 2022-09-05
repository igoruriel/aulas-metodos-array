let ordenado = Boolean(false);

export default function ordenaPorPreco(livros) {
    ordenado = !ordenado
    const livrosOrdenados = livros.sort((a, b) => {
        if(ordenado === false) return b.preco - a.preco
        return a.preco - b.preco
    });
    return livrosOrdenados;
}