export const storeSelectors = {
  locationInput: 'input[placeholder*="Wyszukaj"], input[placeholder*="Search"], input[type="text"]',
  storeList: '[data-testid*="store"], [class*="store"], main',
  storeCard: '[data-testid*="store-card"], [class*="store-card"], article, li',
  directionsLink: 'a:contains("Jak dojechać"), a:contains("Directions")'
} as const
