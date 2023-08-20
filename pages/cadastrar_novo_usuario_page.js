const { I } = inject();

module.exports = {

  fields:{
     preencherNome: '#user',
     preencherEmail: '#email',
     preencherSenha:  '#password',
    

  },

  buttons:{
    botaoCadastro: 'Cadastro',
    botãoCadastar: '#btnRegister'
   
  },

  messages:{
    validacaoCadastro:'.swal2-html-container'
    

  },

  clicarCadastro(){
    I.click(this.buttons.botaoCadastro)
  },

  preencherNomeCadastro(name){
    I.fillField(this.fields.preencherNome,name)
  },

   preencherEmailCadastro(email){
    I.fillField(this.fields.preencherEmail,email)
   },

   preencherSenhaCadastro(){
    I.fillField(this.fields.preencherSenha,secret('123456'))
   },

    clicarCadastar(){
      I.click(this.buttons.botãoCadastar)
    },

    mensagemBemVindo(name){
      I.seeElement(this.messages.validacaoCadastro)
      I.see('Bem-vindo ' +name, '.swal2-html-container')
    }
  
};
