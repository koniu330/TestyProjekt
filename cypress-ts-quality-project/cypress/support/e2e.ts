import './commands'

beforeEach(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})

Cypress.on('uncaught:exception', () => {
  return false
})
