const { I } = inject();

module.exports = {

  fields:{
    
    email:'#user',
    password:'#password',

  },

  buttons:{
    login:'Login',
    loginAcessar:'#btnLogin',

  },

  messages:{
    success: 'Login realizado'

  },

  preencherEmail(email) {
    I.fillField(this.fields.email, email);
  },

  preencherSenha(senha) {
    I.fillField(this.fields.password, senha);
  },

  clicarLogin() {
    I.click(this.buttons.login);
     
  },

  clicarBotaoLogin(){
    I.click(this.buttons.loginAcessar)
    I.see(this.messages.success); // Espera pela mensagem de sucesso após o login
  }

};

  

