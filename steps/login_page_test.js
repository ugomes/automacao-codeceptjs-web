
//const {I, login_page} = inject();

Feature('Login');

Scenario('Realizar Login com Sucesso', ({I,login_page}) => {
    var email = 'testador@testador.com';
    var senha = '123456';

    // Verifique se o objeto `login_page` foi inicializado corretamente.
  



    I.amOnPage('/') 
    login_page.clicarLogin();
    login_page.preencherEmail(email);
    login_page.preencherSenha(senha);
    login_page.clicarBotaoLogin()
 

       
    

});




