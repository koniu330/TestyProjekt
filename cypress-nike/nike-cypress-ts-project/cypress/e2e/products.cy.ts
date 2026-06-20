import { productSelectors } from '../selectors/product.selectors'
import type { NikeSearchData } from '../support/types'

describe('Nike - produkty i wyszukiwarka', () => {
  const searchData: NikeSearchData = {
    phrase: 'Air Force 1',
    expectedText: 'Air Force'
  }

  beforeEach(() => {
    cy.visit('/')
    cy.acceptNikeCookies()
  })

  it('04. Wyszukuje produkt Air Force 1 przez własną komendę', () => {
    cy.searchNikeProduct(searchData)
    cy.location('href').should('include', 'nike.com')
    cy.contains(searchData.expectedText, { matchCase: false }).should('exist')
  })

  it('05. Otwiera stronę z produktami i sprawdza karty produktów', () => {
    cy.visit('/w')
    cy.acceptNikeCookies()
    cy.contains('Nike Air Force', { matchCase: false }).should('exist')
    cy.get('body').find(productSelectors.productCard).its('length').should('be.greaterThan', 3)
  })

  it('06. Sprawdza, czy produkt posiada nazwę i cenę', () => {
    cy.visit('/w')
    cy.acceptNikeCookies()
    cy.contains('Nike Air Force', { matchCase: false }).should('exist')
    cy.get(productSelectors.productCard).first().within(() => {
      cy.get('body, div, a').should('contain.text', 'Nike')
    })
    cy.contains('zł').should('exist')
  })
})
