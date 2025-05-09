'use client'

import { products } from '../../constants/products'
import useGetProducts from '../../hooks/useGetProducts'
import AddCartButton from '../AddCartButton/AddCartButton'

const ProductsList = () => {
  const { isLoading, error } = useGetProducts()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) <div>Nenhum produto encontrado</div>

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <a href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-gray-700 text-sm">{product.name}</h3>
                <p className="mt-1 font-medium text-gray-900 text-lg">
                  {product.price}
                </p>
              </a>
              <AddCartButton productId={product.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductsList
