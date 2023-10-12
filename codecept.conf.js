const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

// ativa o modo sem cabeça quando executado com a variável de ambiente HEADLESS=true
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// habilita todos os plugins comuns https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automacao-codeceptjs-web',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://automationpratice.com.br',
      show: true,
      windowSize: '1920x1080'
    }
  },
  plugins: {

    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
      
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful:false,
      screenshotsForAllureReport:true
    },
    mocha: {
      reporterOptions: {
        }
    },
  


  },
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_page.js",
    cadastrar_novo_usuario_page: "./pages/cadastrar_novo_usuario_page.js"
  }
}


