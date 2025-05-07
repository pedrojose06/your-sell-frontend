'use client'
import { useState } from 'react'

const AddCartButton = () => {
  const [quantity, setQuantity] = useState(0)

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
        className="w-32 flex-1 rounded bg-amber-200 px-4 py-2 text-black hover:cursor-pointer hover:bg-amber-300"
      >
        Add to Cart
      </button>
    </div>
  )
}
export default AddCartButton
