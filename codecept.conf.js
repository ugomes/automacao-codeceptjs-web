const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
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
  include: {
    I: './steps_file.js',

    login_page: "./pages/login_page.js",
    cadastrar_novo_usuario_page: "./pages/cadastrar_novo_usuario_page.js",
  },

  
}