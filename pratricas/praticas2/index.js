const readline = require ('readline-sync');
const contatoControlador = require("./controlador.js");

function menu () {
    console.log ('1. adicionarContatos');
    console.log ('2. listarContatos');
    console.log ('3. buscarContatos');
    console.log ('4. atualizarContatos');
    console.log ('5. removerContatos');
    console.log ('6. Sair');
 }

 function escolherOpcao(opcao) {
    switch(opcao) {
        case '1' :adicionarContatos();
            readline.question(nome, email, telefone);
             break;
        case '2' :ontrolador.listarContatos(); 
            break;
        case '3' :buscarContatos();
            readline.question(nome, emial, telefone); 
            break;
        case '4' :atualizarContatos(); 
            readline.question(nome, email, telefone);
            break;
        case '5' :removerContatos();
            readline.question(noem, email, telefone); 
            break;
        case '6' :processi.exit(0);
        default: console.log('Opcao invalida');
    }
    readline.question('Pressione ENTER para continuar...');
}

function main() {
    while (true) {
        menu();
        const opcao = readline.question ('Entre com uma opcao');
        escolherOpcao(opcao);
    }
}

main();
