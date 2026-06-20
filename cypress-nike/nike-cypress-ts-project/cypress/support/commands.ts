import { commonSelectors } from '../selectors/common.selectors'
import { productSelectors } from '../selectors/product.selectors'
import type { NikeProductData, NikeSearchData } from './types'

Cypress.Commands.add('acceptNikeCookies', () => {
  cy.get('body').then(($body) => {
    const buttonTexts = ['Accept', 'Akceptuj', 'Zgadzam', 'Allow All', 'Zezwól']
    const matchingButton = $body.find('button').toArray().find((button) => {
      const text = button.innerText.trim()
      return buttonTexts.some((buttonText) => text.includes(buttonText))
    })

    if (matchingButton) {
      cy.wrap(matchingButton).click({ force: true })
    }
  })
})

Cypress.Commands.add('searchNikeProduct', (data: NikeSearchData) => {
  cy.acceptNikeCookies()
  cy.get('body').then(($body) => {
    const searchButton = $body.find(commonSelectors.searchButton).first()

    if (searchButton.length) {
      cy.wrap(searchButton).click({ force: true })
    }
  })

  cy.get(commonSelectors.searchInput)
    .first()
    .should('be.visible')
    .clear({ force: true })
    .type(`${data.phrase}{enter}`, { force: true })
})

Cypress.Commands.add('openNikeProduct', (product: NikeProductData) => {
  cy.contains('a, h1, h2, h3, div, span', product.name, { matchCase: false })
    .should('be.visible')
    .first()
    .click({ force: true })
})
