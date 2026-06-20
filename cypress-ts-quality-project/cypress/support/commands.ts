import { authSelectors } from '../selectors/auth.selectors'
import { cartSelectors } from '../selectors/cart.selectors'
import { productSelectors } from '../selectors/product.selectors'
import { contactSelectors } from '../selectors/contact.selectors'
import type { ContactMessage, Product, User } from './types'

declare global {
  namespace Cypress {
    interface Chainable {
      loginUser(user: User): Chainable<void>
      registerUser(user: User): Chainable<void>
      addProductToCart(product: Product): Chainable<void>
      submitContactForm(message: ContactMessage): Chainable<void>
      clearCartIfNeeded(): Chainable<void>
    }
  }
}

Cypress.Commands.add('loginUser', (user: User) => {
  cy.visit('/login')
  cy.get(authSelectors.loginEmailInput).should('be.visible').clear().type(user.email)
  cy.get(authSelectors.loginPasswordInput).clear().type(user.password, { log: false })
  cy.get(authSelectors.loginButton).click()
})

Cypress.Commands.add('registerUser', (user: User) => {
  const firstName = user.firstName ?? 'Jan'
  const lastName = user.lastName ?? 'Kowalski'
  const address = user.address ?? 'Testowa 15'
  const country = user.country ?? 'Canada'
  const state = user.state ?? 'Mazowieckie'
  const city = user.city ?? 'Warszawa'
  const zipcode = user.zipcode ?? '00-001'
  const mobileNumber = user.mobileNumber ?? '500600700'

  cy.visit('/login')
  cy.get(authSelectors.signupNameInput).should('be.visible').clear().type(user.name)
  cy.get(authSelectors.signupEmailInput).clear().type(user.email)
  cy.get(authSelectors.signupButton).click()

  cy.get(authSelectors.genderMrRadio).check()
  cy.get(authSelectors.passwordInput).type(user.password, { log: false })
  cy.get(authSelectors.daySelect).select('10')
  cy.get(authSelectors.monthSelect).select('May')
  cy.get(authSelectors.yearSelect).select('2000')
  cy.get(authSelectors.newsletterCheckbox).check()
  cy.get(authSelectors.offersCheckbox).check()
  cy.get(authSelectors.firstNameInput).type(firstName)
  cy.get(authSelectors.lastNameInput).type(lastName)
  cy.get(authSelectors.companyInput).type('WSEI QA Team')
  cy.get(authSelectors.addressInput).type(address)
  cy.get(authSelectors.countrySelect).select(country)
  cy.get(authSelectors.stateInput).type(state)
  cy.get(authSelectors.cityInput).type(city)
  cy.get(authSelectors.zipcodeInput).type(zipcode)
  cy.get(authSelectors.mobileNumberInput).type(mobileNumber)
  cy.get(authSelectors.createAccountButton).click()
})

Cypress.Commands.add('addProductToCart', (product: Product) => {
  cy.visit('/products')
  cy.get(productSelectors.allProductsTitle).should('contain.text', 'All Products')
  cy.get(productSelectors.addProductById(product.id)).first().click()
  cy.get(productSelectors.addedModal).should('be.visible')
  cy.get(productSelectors.addedModalTitle).should('contain.text', 'Added!')
  cy.get(productSelectors.viewCartModalLink).click()
  cy.get(cartSelectors.cartRows).should('contain.text', product.name)
})

Cypress.Commands.add('submitContactForm', (message: ContactMessage) => {
  cy.visit('/contact_us')
  cy.get('body').then(($body) => {
    if ($body.find(contactSelectors.nameInput).length) {
      cy.get(contactSelectors.nameInput).clear().type(message.name)
      cy.get(contactSelectors.emailInput).clear().type(message.email)
      cy.get(contactSelectors.subjectInput).clear().type(message.subject)
      cy.get(contactSelectors.messageTextarea).clear().type(message.message)
    }
  })
})

Cypress.Commands.add('clearCartIfNeeded', () => {
  cy.visit('/view_cart')
  cy.get('body').then(($body) => {
    if ($body.find(cartSelectors.deleteProductButton).length > 0) {
      cy.get(cartSelectors.deleteProductButton).each(($button) => {
        cy.wrap($button).click()
      })
    }
  })
})

export {}
