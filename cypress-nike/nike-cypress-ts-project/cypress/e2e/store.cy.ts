import { storeSelectors } from '../selectors/store.selectors'
import type { NikeStoreSearchData } from '../support/types'

describe('Nike - wyszukiwarka sklepów', () => {
  const storeSearch: NikeStoreSearchData = {
    city: 'Kraków',
    expectedCountryCode: 'PL'
  }

  beforeEach(() => {
    cy.visit('/retail')
    cy.acceptNikeCookies()
  })

  it('10. Otwiera stronę wyszukiwarki sklepów Nike', () => {
    cy.contains('Znajdź sklep', { matchCase: false }).should('exist')
    cy.get(storeSelectors.storeList).should('exist')
  })

  it('11. Sprawdza pole wyszukiwania lokalizacji', () => {
    cy.get(storeSelectors.locationInput).first().should('exist')
  })
})
