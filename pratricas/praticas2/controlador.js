const contatos = []

function  adicionarContatos () {
    const nome = readline.question('Informe o seu nome');
    const email = readline.question('Informe o seu email');
    const telefone = readline.question('Informe o seu telefone')
    const novoContato = (nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos (){
    produtos.forEach((contato) =>
    console.log (contato.nome,"-", contato.email, "-", contato.telefone));
}

function buscarContatos () {
    const nome = readline.question('Informe o seu nome:')
    const buscou = contatos.find((contatos) => contatos.nome === nome);
    if (buscou){
        console.log (buscou.nome,'-', buscou.email,'-', buscou.telefone);
    } else {
        console.log ("Contato não encontrado");
    }
}

function atualizarContatos() {
    const nome = readline.question("Informe o seu nome: ");
    const email = readlien.question("Informe seu email:");
    const telefone = readline.questio("Informe seu telefone");
    const buscou = contatos.find((contatos) => contatos.nome === nome, "-", contatos.email === email, "-", contatos.telefone === telefone);
    if (buscou) {
      const outroNome =  readline.question("Informe o seu nome:");
      const outroEmail =  readline.question("Informe o seu email:");
        const outroTelefone = readline.question("Indorme o seu telefone:");
      buscou.nome = outroNome;
      buscou.email = outroEmail;
      buscou.telefone = outroTelefone;
    } else {
      console.log("Contato não encontrado");
    }
  }

function removerContatos () {
    const nome = readline.question("Informe o seu nome: ");
    const posicao = contatos.findIndex((contatos) => contatos.nome === nome);
    if (posicao >=0){
        contatos.slice(posicao, 1);
    } else{
        console.log ("Contato não encontrado");
    }
}

