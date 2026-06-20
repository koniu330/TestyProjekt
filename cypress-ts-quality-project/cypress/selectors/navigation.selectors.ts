export const navSelectors = {
  header: '#header',
  homeLink: 'a[href="/"]',
  productsLink: 'a[href="/products"]',
  cartLink: 'a[href="/view_cart"]',
  signupLoginLink: 'a[href="/login"]',
  contactLink: 'a[href="/contact_us"]',
  logoutLink: 'a[href="/logout"]',
  deleteAccountLink: 'a[href="/delete_account"]',
  loggedUserInfo: 'a:contains("Logged in as")'
} as const
