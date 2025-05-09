import { atom } from 'jotai'
import { IShopCartProduct } from '../interfaces/shop-cart'

export const atomShopCartProducts = atom([] as IShopCartProduct[])
