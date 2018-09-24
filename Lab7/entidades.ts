export interface Autor {
    primeiro_nome: string,
    ultimo_nome: string
}

export interface Livro {
    titulo: string,
    autores: Autor[]
}

export interface Emprestimo {
    livro: Livro,
    status: string,
    dataEntrega: Date
}