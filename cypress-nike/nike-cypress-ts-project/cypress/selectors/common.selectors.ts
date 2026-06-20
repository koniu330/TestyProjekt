export const commonSelectors = {
  logo: '[aria-label="Nike Home Page"]',
  navigation: 'nav',
  searchButton: '[data-var="vsButton"], button[aria-label*="Search"], button[aria-label*="Szukaj"]',
  searchInput: 'input[type="search"], input[placeholder*="Search"], input[placeholder*="Szukaj"]',
  searchSuggestions: '[data-testid*="search"], [class*="search"]',
  cookieAcceptButton: 'button:contains("Accept"), button:contains("Akceptuj"), button:contains("Zgadzam")',
  cartLink: 'a[href*="cart"], a[href*="bag"]',
  favoritesLink: 'a[href*="favorites"], a[href*="wishlist"]',
  signInLink: 'a[href*="login"], a[href*="member"], button:contains("Dołącz"), button:contains("Zaloguj")'
} as const
