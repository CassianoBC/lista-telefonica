class Contato {
    nome: string
    email: string
    telefone: string
    id: number

    constructor(nome: string, email: string, telefone: string, id: number) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.id = id;
    }
}

new Contato("Cassiano Borges", "Cassianocosta12357@gmail.com", "51998893255", 1);

export default Contato;