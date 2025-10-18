const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationexercise.com',
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}'
  },
  video: false
})
