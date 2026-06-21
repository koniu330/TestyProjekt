import { contactSelectors } from '../selectors/contact.selectors'
import type { ContactMessage } from '../support/types'

describe('Formularz kontaktowy', () => {
  it('11. Wysyła formularz Contact Us i sprawdza komunikat sukcesu', () => {
    const message: ContactMessage = {
      name: 'Tester ',
      email: 'tej@gmail.com',
      subject: 'Tej ',
      message: 'Ala ma kota '
    }

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('Press OK to proceed!')
    })

    cy.submitContactForm(message)
    cy.get(contactSelectors.submitButton).click()
    cy.get(contactSelectors.successAlert)
      .should('be.visible')
      .and('contain.text', 'Success! Your details have been submitted successfully.')
  })
})
