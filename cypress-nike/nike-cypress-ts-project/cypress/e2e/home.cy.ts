import { commonSelectors } from '../selectors/common.selectors'

describe('Nike - strona główna i nawigacja', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptNikeCookies()
  })

  it('01. Otwiera stronę główną Nike PL', () => {
    cy.location('hostname').should('include', 'nike.com')
    cy.get('body').should('be.visible')
    cy.contains('Nike', { matchCase: false }).should('exist')
  })

  it('02. Sprawdza widoczność głównej nawigacji', () => {
    cy.get(commonSelectors.navigation).should('exist')
    cy.contains('Nowości', { matchCase: false }).should('exist')
    cy.contains('Mężczyźni', { matchCase: false }).should('exist')
    cy.contains('Kobiety', { matchCase: false }).should('exist')
  })

  it('03. Sprawdza dostępność linku do koszyka', () => {
    cy.get('a[href*="cart"], a[href*="bag"], a[aria-label*="Koszyk"], a[aria-label*="Bag"]')
      .first()
      .should('exist')
  })
})
