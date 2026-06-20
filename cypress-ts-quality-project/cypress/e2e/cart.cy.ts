import { cartSelectors } from '../selectors/cart.selectors'
import { productSelectors } from '../selectors/product.selectors'
import type { Product } from '../support/types'

const product: Product = {
  id: 1,
  name: 'Blue Top',
  quantity: 3
}

describe('Koszyk zakupowy', () => {
  it('08. Dodaje produkt do koszyka przez własną komendę', () => {
    cy.addProductToCart(product)
    cy.get(cartSelectors.cartInfoTable).should('be.visible')
    cy.get(cartSelectors.productName).should('contain.text', product.name)
  })

  it('09. Dodaje produkt z wybraną ilością ze strony szczegółów', () => {
    cy.visit(`/product_details/${product.id}`)
    cy.get(productSelectors.detailQuantityInput).clear().type(String(product.quantity))
    cy.get(productSelectors.detailAddToCartButton).click()
    cy.get(productSelectors.viewCartModalLink).click()

    cy.get(cartSelectors.productName).should('contain.text', product.name)
    cy.get(cartSelectors.productQuantity).should('contain.text', String(product.quantity))
  })

  it('10. Usuwa produkt z koszyka', () => {
    cy.addProductToCart(product)
    cy.get(cartSelectors.deleteProductButton).click()
    cy.get(cartSelectors.cartRows).should('not.exist')
    cy.get('body').should('contain.text', 'Cart is empty')
  })
})
