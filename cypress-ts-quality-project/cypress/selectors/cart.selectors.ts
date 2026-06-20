export const cartSelectors = {
  cartInfoTable: '#cart_info_table',
  cartRows: '#cart_info_table tbody tr',
  productName: '.cart_description h4 a',
  productPrice: '.cart_price p',
  productQuantity: '.cart_quantity button',
  productTotal: '.cart_total_price',
  deleteProductButton: '.cart_quantity_delete',
  emptyCartMessage: '#empty_cart p, .text-center b'
} as const
