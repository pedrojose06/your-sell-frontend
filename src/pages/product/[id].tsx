// src/pages/product/[id].tsx
import { PageProps } from 'waku/router'

const ProductIdPage = async ({ id }: PageProps<'/product/[id]'>) => {
  return (
    <div>
      <h1>Product ID: {id}</h1>
    </div>
  )
}

export default ProductIdPage

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const
}
