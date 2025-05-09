'use client'
import { lazy, useState } from 'react'
import { atomShopCartProducts } from '../../../cart/atoms/shop-cart'
import { useAtom } from 'jotai'

const Toast = lazy(() => import('../../../../components/toast'))
interface IAddCartButton {
  productId: number
}

const AddCartButton = ({ productId }: IAddCartButton) => {
  const [quantity, setQuantity] = useState(0)
  const [showToast, setShowToast] = useState(false)
  const [toastKey, setToastKey] = useState(0)
  const [shopCart, setShopCart] = useAtom(atomShopCartProducts)

  const handleTypeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '') {
      setQuantity(0)
    }
    const parsedValue = Number.parseInt(value, 10)
    if (!Number.isNaN(parsedValue)) {
      setQuantity(parsedValue)
    }
  }

  const addProductToCart = () => {
    if (quantity <= 0) return
    const existingProduct = shopCart.find((item) => item.id === productId)
    if (existingProduct) {
      setShopCart((prev) =>
        prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      )
      setQuantity(0)
      setToastKey((k) => k + 1)
      setShowToast(true)
      return
    }

    setShopCart((prev) => [...prev, { id: productId, quantity }])
    setQuantity(0)
    setToastKey((k) => k + 1)
    setShowToast(true)
  }

  return (
    <div className="mt-4 flex w-full gap-4">
      <div className="flex max-w-32 items-center ">
        <button
          className="rounded-l-lg border border-gray-300 border-solid bg-gray-200 px-4 py-2 font-bold text-black text-lg hover:cursor-pointer hover:bg-gray-300"
          type="button"
        >
          -
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="min-w-12 text-center focus-visible:outline-none"
          value={quantity}
          onChange={handleTypeQuantity}
          size={2}
        />
        <button
          type="button"
          onClick={() => setQuantity(quantity + 1)}
          className="rounded-r-lg border border-gray-300 border-solid bg-gray-200 px-4 py-2 font-bold text-black text-lg hover:cursor-pointer hover:bg-gray-300"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={addProductToCart}
        className="w-32 flex-1 rounded bg-amber-200 px-4 py-2 text-black hover:cursor-pointer hover:bg-amber-300"
      >
        Add to Cart
      </button>
      {showToast && (
        <Toast
          key={toastKey}
          message="Produto adicionado ao carrinho com sucesso!"
          duration={3000}
          onClose={() => setShowToast(false)}
          type="success"
        />
      )}
    </div>
  )
}
export default AddCartButton
