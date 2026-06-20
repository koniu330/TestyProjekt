export const productSelectors = {
  productGrid: '[data-testid="product-grid"], .product-grid, [class*="product-grid"]',
  productCard: '[data-testid="product-card"], .product-card, [class*="product-card"], a[href*="/t/"]',
  productTitle: '[data-testid="product-title"], h1, h2, h3, [class*="product-card__title"]',
  productPrice: '[data-testid="product-price"], [class*="price"], [aria-label*="Cena"]',
  productSubtitle: '[data-testid="product-sub-title"], [class*="subtitle"], [class*="product-card__subtitle"]',
  productDetailsTitle: 'h1',
  productDetailsPrice: '[data-testid="product-price"], [class*="price"], [aria-label*="Cena"]',
  sizeButtons: 'button[aria-label*="EU"], button[data-testid*="size"], button:contains("EU")',
  addToBagButton: 'button:contains("Dodaj do koszyka"), button:contains("Add to Bag"), button[aria-label*="Add to Bag"]',
  favoriteButton: 'button:contains("Ulubione"), button:contains("Favourite"), button[aria-label*="Favorite"]'
} as const
