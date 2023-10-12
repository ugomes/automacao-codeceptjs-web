Feature('Login 2');
Scenario('Realizar Login com Sucesso 2 ', ({I}) => {


I.amOnPage('/') 
I.click('Login')
I.fillField('#user','testador@testador.com')
I.fillField('#password','123456')
I.click('#btnLogin')
I.dontSee('E-mail inválido.')
I.see('Login realizado') 

});