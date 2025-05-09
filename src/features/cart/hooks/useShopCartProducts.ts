import { useAtomValue } from 'jotai'
import { atomShopCartProducts } from '../atoms/shop-cart'
import { products } from '../../products/constants/products'

export const useShopCartProducts = () => {
  const shopCart = useAtomValue(atomShopCartProducts)

  const cartProducts = products
    .filter((product) => shopCart.some((item) => item.id === product.id))
    .map((product) => {
      const cartItem = shopCart.find((item) => item.id === product.id)
      return {
        ...product,
        quantity: cartItem ? cartItem.quantity : 0,
      }
    })

  const totalPrice = cartProducts.reduce((acc, product) => {
    const cartItem = shopCart.find((item) => item.id === product.id)
    return (
      acc + (cartItem ? Number(product.price) * Number(cartItem.quantity) : 0)
    )
  }, 0)

  return {
    cartProducts,
    totalPrice,
  }
}
