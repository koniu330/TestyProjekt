export const productSelectors = {
  allProductsTitle: '.features_items h2.title',
  productCards: '.features_items .product-image-wrapper',
  productInfo: '.productinfo',
  productName: '.productinfo p',
  productPrice: '.productinfo h2',
  searchInput: '#search_product',
  searchButton: '#submit_search',
  searchedProductsTitle: '.features_items h2.title',
  viewProductLinkById: (id: number): string => `a[href="/product_details/${id}"]`,
  addProductById: (id: number): string => `a[data-product-id="${id}"]`,
  addedModal: '#cartModal',
  addedModalTitle: '#cartModal .modal-title',
  viewCartModalLink: '#cartModal a[href="/view_cart"]',
  continueShoppingButton: '#cartModal button[data-dismiss="modal"]',
  productDetails: '.product-information',
  detailQuantityInput: '#quantity',
  detailAddToCartButton: 'button.cart'
} as const
