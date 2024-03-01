class contato{
    constructur (nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    get escreve_nome() {
        return this.nome;
    }
    get escreve_email() {
        return this.email;
    }
    get escreve_telefone() {
        return this.telefone;
    }
}
module.exports = {contato};
