import { productSelectors } from '../selectors/product.selectors'
import type { NikeProductData } from '../support/types'

describe('Nike - szczegóły produktu', () => {
  const product: NikeProductData = {
    name: 'Nike Air Force',
    priceContains: 'zł',
    size: 'EU'
  }

  beforeEach(() => {
    cy.visit('/w')
    cy.acceptNikeCookies()
    cy.contains(product.name, { matchCase: false }).should('exist')
  })

  it('07. Otwiera szczegóły produktu przez własną komendę', () => {
    cy.openNikeProduct(product)
    cy.location('pathname').should('include', '/t/')
    cy.get(productSelectors.productDetailsTitle).should('be.visible')
  })

  it('08. Sprawdza cenę na stronie szczegółów produktu', () => {
    cy.openNikeProduct(product)
    cy.contains(product.priceContains as string).should('exist')
  })

  it('09. Sprawdza sekcję wyboru rozmiaru albo przycisk dodania do koszyka', () => {
    cy.openNikeProduct(product)
    cy.get('body').then(($body) => {
      const hasSizeButtons = $body.find(productSelectors.sizeButtons).length > 0
      const hasAddButton = $body.find('button').toArray().some((button) => {
        const text = button.innerText.toLowerCase()
        return text.includes('dodaj') || text.includes('add')
      })

      expect(hasSizeButtons || hasAddButton).to.eq(true)
    })
  })
})
