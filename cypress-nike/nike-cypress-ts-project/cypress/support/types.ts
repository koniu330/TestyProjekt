export interface NikeSearchData {
  phrase: string
  expectedText: string
}

export interface NikeProductData {
  name: string
  category?: string
  priceContains?: string
  size?: string
}

export interface NikeStoreSearchData {
  city: string
  expectedCountryCode: string
}

declare global {
  namespace Cypress {
    interface Chainable {
      acceptNikeCookies(): Chainable<void>
      searchNikeProduct(data: NikeSearchData): Chainable<void>
      openNikeProduct(product: NikeProductData): Chainable<void>
    }
  }
}

export {}
