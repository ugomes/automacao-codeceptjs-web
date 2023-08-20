Feature('criarCadastro');
var faker = require('faker');


Scenario('Criar Cadastro',  ({I, cadastrar_novo_usuario_page}) => {
   
    var name = faker.name.firstName()
    var email = faker.internet.email()
    
    I.amOnPage('/')
    //I.click('Cadastro')
   // I.fillField('#user',name)
   // I.fillField('#email',email)
   // I.fillField('#password',secret('123456'))
   // I.click('#btnRegister')
   // I.seeElement('.swal2-html-container');
   // I.see('Bem-vindo ' +name, '.swal2-html-container');
    
   cadastrar_novo_usuario_page.clicarCadastro()
   cadastrar_novo_usuario_page.preencherNomeCadastro(name)
   cadastrar_novo_usuario_page.preencherEmailCadastro(email)
   cadastrar_novo_usuario_page.preencherSenhaCadastro()
   cadastrar_novo_usuario_page.clicarCadastar()
   cadastrar_novo_usuario_page.mensagemBemVindo(name)
});
