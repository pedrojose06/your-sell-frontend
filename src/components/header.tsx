'use client'

import { useAtomValue } from 'jotai'
import { lazy, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'waku'
import { atomShopCartProducts } from '../features/cart/atoms/shop-cart'
import logo from '../assets/pao.png'

const ShoppingCart = lazy(
  () => import('../features/cart/components/ShopCart/ShopCart')
)

export const Header = () => {
  const [openCart, setOpenCart] = useState(false)
  const cartQuantity = useAtomValue(atomShopCartProducts)
  const badgeQuantity = cartQuantity.reduce((acc, product) => {
    return acc + product.quantity
  }, 0)

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between gap-4 bg-white p-6 shadow-md lg:fixed lg:top-0 lg:left-0">
      <Link to="/products">
        <img src={logo} alt="Logo" className="h-12 w-14" />
      </Link>
      <div className="flex gap-8">
        <h2 className="font-bold text-lg tracking-tight">
          <Link to="/products">Produtos</Link>
        </h2>
        <h2 className="font-bold text-lg tracking-tight">
          <Link to="/about">Sobre a empresa</Link>
        </h2>
        <h2 className="font-bold text-lg tracking-tight">
          <Link to="/users-feedback">Avaliações dos usuários</Link>
        </h2>
      </div>
      <div className="relative">
        <IoCartOutline
          className="h-8 w-8 cursor-pointer text-gray-700"
          onClick={() => setOpenCart(true)}
        />
        <span className="-top-2 -right-2 absolute flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white text-xs">
          {badgeQuantity}
        </span>
      </div>
      {openCart && <ShoppingCart open={openCart} setOpen={setOpenCart} />}
    </header>
  )
}
