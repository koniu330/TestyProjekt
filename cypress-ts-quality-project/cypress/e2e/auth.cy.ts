import { authSelectors } from '../selectors/auth.selectors'
import { navSelectors } from '../selectors/navigation.selectors'
import type { User } from '../support/types'

const uniqueUser = (): User => ({
  name: 'Student QA',
  email: `student.qa.${Date.now()}@example.com`,
  password: 'Test12345!'
})

describe('Autoryzacja użytkownika', () => {
  it('01. Rejestruje nowego użytkownika i usuwa konto po teście', () => {
    const user = uniqueUser()

    cy.registerUser(user)
    cy.get(authSelectors.accountCreatedTitle).should('be.visible').and('contain.text', 'Account Created!')
    cy.get(authSelectors.continueButton).click()
    cy.get(navSelectors.header).should('contain.text', `Logged in as ${user.name}`)

    cy.get(navSelectors.deleteAccountLink).click()
    cy.get(authSelectors.accountDeletedTitle).should('contain.text', 'Account Deleted!')
  })

  it('02. Loguje użytkownika poprawnymi danymi po wcześniejszej rejestracji', () => {
    const user = uniqueUser()

    cy.registerUser(user)
    cy.get(authSelectors.continueButton).click()
    cy.get(navSelectors.logoutLink).click()

    cy.loginUser(user)
    cy.get(navSelectors.header).should('contain.text', `Logged in as ${user.name}`)

    cy.get(navSelectors.deleteAccountLink).click()
    cy.get(authSelectors.accountDeletedTitle).should('contain.text', 'Account Deleted!')
  })

  it('03. Wyświetla komunikat błędu przy błędnym logowaniu', () => {
    const invalidUser: User = {
      name: 'Niepoprawny Tester',
      email: `wrong.${Date.now()}@example.com`,
      password: 'wrong-password'
    }

    cy.loginUser(invalidUser)
    cy.get(authSelectors.loginError)
      .should('be.visible')
      .and('contain.text', 'Your email or password is incorrect!')
  })

  it('04. Waliduje próbę rejestracji na już istniejący adres e-mail', () => {
    const user = uniqueUser()

    cy.registerUser(user)
    cy.get(authSelectors.continueButton).click()
    cy.get(navSelectors.logoutLink).click()

    cy.visit('/login')
    cy.get(authSelectors.signupNameInput).type(user.name)
    cy.get(authSelectors.signupEmailInput).type(user.email)
    cy.get(authSelectors.signupButton).click()
    cy.get(authSelectors.signupError)
      .should('be.visible')
      .and('contain.text', 'Email Address already exist!')

    cy.loginUser(user)
    cy.get(navSelectors.deleteAccountLink).click()
  })
})
