import './commands'
import 'cypress-file-upload'

// Optionally set up global hooks
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
