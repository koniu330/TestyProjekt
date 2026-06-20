import { productSelectors } from '../selectors/product.selectors'
import type { Product } from '../support/types'

describe('Produkty i wyszukiwarka', () => {
  it('05. Otwiera listę produktów i sprawdza widoczność kart produktów', () => {
    cy.visit('/products')
    cy.get(productSelectors.allProductsTitle).should('be.visible').and('contain.text', 'All Products')
    cy.get(productSelectors.productCards).should('have.length.greaterThan', 5)
    cy.get(productSelectors.productCards).first().within(() => {
      cy.get(productSelectors.productPrice).should('be.visible')
      cy.get(productSelectors.productName).should('be.visible')
    })
  })

  it('06. Wyszukuje produkt po frazie i sprawdza wyniki', () => {
    cy.visit('/products')
    cy.get(productSelectors.searchInput).should('be.visible').type('top')
    cy.get(productSelectors.searchButton).click()
    cy.get(productSelectors.searchedProductsTitle).should('contain.text', 'Searched Products')
    cy.get(productSelectors.productCards).should('have.length.greaterThan', 0)
    cy.get(productSelectors.productCards).first().should('contain.text', 'Top')
  })

  it('07. Otwiera szczegóły produktu i sprawdza podstawowe informacje', () => {
    const product: Product = { id: 1, name: 'Blue Top', quantity: 1 }

    cy.visit('/products')
    cy.get(productSelectors.viewProductLinkById(product.id)).click()
    cy.get(productSelectors.productDetails).should('be.visible')
    cy.get(productSelectors.productDetails).should('contain.text', product.name)
    cy.get(productSelectors.productDetails).should('contain.text', 'Availability')
    cy.get(productSelectors.productDetails).should('contain.text', 'Condition')
    cy.get(productSelectors.productDetails).should('contain.text', 'Brand')
  })
})
